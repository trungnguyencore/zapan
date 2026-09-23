$ErrorActionPreference = 'Stop'
$projectId = 'zapan-v2-trunk'
$token = (gcloud auth print-access-token --project=$projectId).Trim()
if (-not $token) { throw 'Could not obtain gcloud access token' }

$headers = @{
  Authorization = "Bearer $token"
  'X-Goog-User-Project' = $projectId
}
$configUri = "https://identitytoolkit.googleapis.com/admin/v2/projects/$projectId/config"

try {
  Invoke-RestMethod -Method Get -Uri $configUri -Headers $headers | Out-Null
} catch {
  $status = [int]$_.Exception.Response.StatusCode
  if ($status -ne 404) { throw }
  $initUri = "https://identitytoolkit.googleapis.com/v2/projects/$projectId/identityPlatform:initializeAuth"
  Invoke-RestMethod -Method Post -Uri $initUri -Headers $headers -ContentType 'application/json' -Body '{}' | Out-Null
}

$bodyPath = Join-Path $PSScriptRoot 'auth-config-patch.json'
$body = Get-Content $bodyPath -Raw
$updateMask = 'signIn.email,signIn.anonymous,emailPrivacyConfig'
$patchUri = "$configUri?updateMask=$updateMask"
$response = Invoke-RestMethod -Method Patch -Uri $patchUri -Headers $headers -ContentType 'application/json' -Body $body

Write-Output "email.enabled=$($response.signIn.email.enabled)"
Write-Output "email.passwordRequired=$($response.signIn.email.passwordRequired)"
Write-Output "anonymous.enabled=$($response.signIn.anonymous.enabled)"
Write-Output "emailPrivacy.enabled=$($response.emailPrivacyConfig.enableImprovedEmailPrivacy)"
