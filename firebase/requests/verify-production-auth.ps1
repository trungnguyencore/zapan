$ErrorActionPreference = 'Stop'
$root = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
$envPath = Join-Path $root 'app\.env.local'
if (-not (Test-Path $envPath)) { throw 'app/.env.local not found' }

$vars = @{}
Get-Content $envPath | ForEach-Object {
  if ($_ -match '^([^#=]+)=(.*)$') { $vars[$matches[1].Trim()] = $matches[2].Trim() }
}
$apiKey = $vars['VITE_FIREBASE_API_KEY']
if (-not $apiKey) { throw 'VITE_FIREBASE_API_KEY missing' }

$email = "zapan-production-check-$([guid]::NewGuid().ToString('N'))@example.com"
$password = "ZaPanVerify-$([guid]::NewGuid().ToString('N').Substring(0,12))!"
$signupToken = $null
$signinToken = $null

try {
  $signupBody = @{ email = $email; password = $password; returnSecureToken = $true } | ConvertTo-Json
  $signup = Invoke-RestMethod -Method Post -Uri "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=$apiKey" -ContentType 'application/json' -Body $signupBody
  $signupToken = $signup.idToken
  if (-not $signup.localId -or -not $signupToken) { throw 'Production signup did not return expected auth tokens' }
  Write-Output 'signup=PASS'

  $signinBody = @{ email = $email; password = $password; returnSecureToken = $true } | ConvertTo-Json
  $signin = Invoke-RestMethod -Method Post -Uri "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=$apiKey" -ContentType 'application/json' -Body $signinBody
  $signinToken = $signin.idToken
  if ($signin.localId -ne $signup.localId -or -not $signinToken) { throw 'Production signin did not return the created user' }
  Write-Output 'signin=PASS'
} finally {
  $deleteToken = if ($signinToken) { $signinToken } else { $signupToken }
  if ($deleteToken) {
    $deleteBody = @{ idToken = $deleteToken } | ConvertTo-Json
    Invoke-RestMethod -Method Post -Uri "https://identitytoolkit.googleapis.com/v1/accounts:delete?key=$apiKey" -ContentType 'application/json' -Body $deleteBody | Out-Null
    Write-Output 'cleanup=PASS'
  }
}
