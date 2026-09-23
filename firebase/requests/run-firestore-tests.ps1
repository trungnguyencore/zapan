$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$app = Join-Path $root 'app'
$runtime = Join-Path $root 'firebase\.runtime\temurin21'
$emulatorCache = Join-Path $root 'firebase\.emulators'

$java = Get-ChildItem -Path $runtime -Recurse -Filter java.exe | Where-Object { $_.FullName -match '\\bin\\java\.exe$' } | Select-Object -First 1
if (-not $java) { throw 'Local JDK 21 not found. Run setup-local-jdk21.ps1 first.' }
$env:JAVA_HOME = Split-Path (Split-Path $java.FullName -Parent) -Parent
$env:PATH = (Join-Path $env:JAVA_HOME 'bin') + ';' + $env:PATH
$env:FIREBASE_EMULATORS_PATH = $emulatorCache

Set-Location $app
& npx.cmd firebase emulators:exec --config ../firebase.json --project zapan-v2-trunk --only auth,firestore "npm run test:firebase"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
