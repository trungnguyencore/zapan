$ErrorActionPreference = 'Stop'

$root = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$app = Join-Path $root 'app'
$envPath = Join-Path $app '.env.local'
$projectId = 'zapan-v2-trunk'

if (-not (Test-Path $envPath)) { throw 'app/.env.local not found' }

$vars = @{}
Get-Content $envPath | ForEach-Object {
  if ($_ -match '^([^#=]+)=(.*)$') { $vars[$matches[1].Trim()] = $matches[2].Trim() }
}
$apiKey = $vars['VITE_FIREBASE_API_KEY']
if (-not $apiKey) { throw 'VITE_FIREBASE_API_KEY missing' }

$runId = [guid]::NewGuid().ToString('N')
$email = "zapan-cloud-smoke-$runId@example.com"
$password = "ZaPanCloud-$($runId.Substring(0,16))!"
$env:ZAPAN_SMOKE_EMAIL = $email
$env:ZAPAN_SMOKE_PASSWORD = $password
$env:PLAYWRIGHT_BROWSERS_PATH = '0'

$testError = $null
$cleanupErrors = New-Object System.Collections.Generic.List[string]

function SignIn-TemporaryAccount {
  param([string]$Email, [string]$Password)
  $body = @{ email = $Email; password = $Password; returnSecureToken = $true } | ConvertTo-Json
  try {
    return Invoke-RestMethod -Method Post -Uri "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=$apiKey" -ContentType 'application/json' -Body $body
  } catch {
    $status = if ($_.Exception.Response) { [int]$_.Exception.Response.StatusCode } else { 0 }
    if ($status -eq 400) { return $null }
    throw
  }
}

function Assert-FirestoreCollectionEmpty {
  param([string]$Uid, [string]$CollectionName)
  $token = (gcloud auth print-access-token --project=$projectId).Trim()
  if (-not $token) { throw 'Could not obtain gcloud access token for cleanup verification' }
  $headers = @{ Authorization = "Bearer $token"; 'X-Goog-User-Project' = $projectId }
  $uri = "https://firestore.googleapis.com/v1/projects/$projectId/databases/(default)/documents/users/$Uid/$CollectionName?pageSize=1"
  try {
    $response = Invoke-RestMethod -Method Get -Uri $uri -Headers $headers
    if ($response.documents -and $response.documents.Count -gt 0) {
      throw "Firestore cleanup verification failed: $CollectionName still has documents"
    }
  } catch {
    $status = if ($_.Exception.Response) { [int]$_.Exception.Response.StatusCode } else { 0 }
    if ($status -ne 404) { throw }
  }
}

try {
  Set-Location $app
  & npx.cmd playwright test --config playwright.production.config.ts
  if ($LASTEXITCODE -ne 0) { throw "Production Playwright smoke failed with exit code $LASTEXITCODE" }
  Write-Output 'productionBrowserSmoke=PASS'
} catch {
  $testError = $_
} finally {
  try {
    $signin = SignIn-TemporaryAccount -Email $email -Password $password
    if ($signin) {
      $uid = $signin.localId
      $idToken = $signin.idToken
      if (-not $uid -or -not $idToken) { throw 'Cleanup sign-in did not return uid/idToken' }

      Set-Location $app
      & npx.cmd firebase firestore:delete "users/$uid" --recursive --force --project $projectId --config ../firebase.json
      if ($LASTEXITCODE -ne 0) { throw "Firestore recursive cleanup failed with exit code $LASTEXITCODE" }

      Assert-FirestoreCollectionEmpty -Uid $uid -CollectionName 'events'
      Assert-FirestoreCollectionEmpty -Uid $uid -CollectionName 'progress'
      Write-Output 'firestoreCleanup=PASS'

      $deleteBody = @{ idToken = $idToken } | ConvertTo-Json
      Invoke-RestMethod -Method Post -Uri "https://identitytoolkit.googleapis.com/v1/accounts:delete?key=$apiKey" -ContentType 'application/json' -Body $deleteBody | Out-Null

      $afterDelete = SignIn-TemporaryAccount -Email $email -Password $password
      if ($afterDelete) { throw 'Auth cleanup verification failed: temporary account can still sign in' }
      Write-Output 'authCleanup=PASS'
    } else {
      Write-Output 'temporaryAccountNotCreated=PASS'
    }
  } catch {
    $cleanupErrors.Add($_.Exception.Message)
  }

  Remove-Item Env:ZAPAN_SMOKE_EMAIL -ErrorAction SilentlyContinue
  Remove-Item Env:ZAPAN_SMOKE_PASSWORD -ErrorAction SilentlyContinue
}

if ($cleanupErrors.Count -gt 0) {
  throw "Cleanup failed: $($cleanupErrors -join '; ')"
}
if ($testError) { throw $testError }
