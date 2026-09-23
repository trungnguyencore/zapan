$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$runtime = Join-Path $root 'firebase\.runtime'
$archive = Join-Path $runtime 'temurin21.zip'
$extract = Join-Path $runtime 'temurin21'
$api = 'https://api.adoptium.net/v3/assets/latest/21/hotspot?architecture=x64&image_type=jdk&os=windows&vendor=eclipse'

New-Item -ItemType Directory -Force -Path $runtime | Out-Null
$asset = (Invoke-RestMethod -Uri $api -Method Get)[0]
$link = $asset.binary.package.link
$expected = $asset.binary.package.checksum.ToLowerInvariant()
if (-not $link -or -not $expected) { throw 'Adoptium metadata missing package link/checksum' }

if (-not (Test-Path $archive)) {
  & curl.exe -L --fail --silent --show-error --output $archive $link
  if ($LASTEXITCODE -ne 0) { throw "curl failed with exit code $LASTEXITCODE" }
}
$actual = (Get-FileHash -Algorithm SHA256 $archive).Hash.ToLowerInvariant()
if ($actual -ne $expected) { throw "Temurin checksum mismatch: expected $expected, got $actual" }

if (-not (Test-Path $extract)) {
  New-Item -ItemType Directory -Force -Path $extract | Out-Null
  & tar.exe -xf $archive -C $extract
  if ($LASTEXITCODE -ne 0) { throw "tar failed with exit code $LASTEXITCODE" }
}
$java = Get-ChildItem -Path $extract -Recurse -Filter java.exe | Where-Object { $_.FullName -match '\\bin\\java\.exe$' } | Select-Object -First 1
if (-not $java) { throw 'Could not locate java.exe in extracted Temurin runtime' }
$javaHome = Split-Path (Split-Path $java.FullName -Parent) -Parent
Write-Output "JAVA_HOME=$javaHome"
& $java.FullName -version
