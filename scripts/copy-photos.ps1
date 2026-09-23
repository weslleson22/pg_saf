$ErrorActionPreference = 'Stop'
$base = "public/foto"

if (-not (Test-Path $base)) {
    New-Item -ItemType Directory -Force -Path $base | Out-Null
}

function Ensure-And-Copy($destDir, $srcFile, $destName) {
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Force -Path $destDir | Out-Null
    }
    Copy-Item -Path $srcFile -Destination (Join-Path $destDir $destName) -Force
    Write-Host "Copied $srcFile to $destDir/$destName"
}

# SAF
Ensure-And-Copy "$base/SAF" "Fotos/SAF/@ytaianaphotos-2.jpg" "equipe.jpg"

# ANDERSON
Ensure-And-Copy "$base/ANDERSON" "Fotos/ANDERSON/@ytaianaphotos-109.jpg" "foto1.jpg"
Ensure-And-Copy "$base/ANDERSON" "Fotos/ANDERSON/@ytaianaphotos-221.jpg" "foto2.jpg"

# JOSE / JOSÉ
$joseFolder = Get-ChildItem Fotos | Where-Object { $_.Name -like "JOS*" } | Select-Object -First 1
if ($joseFolder) {
    Ensure-And-Copy "$base/JOSE" "$($joseFolder.FullName)/@ytaianaphotos-69.jpg" "foto1.jpg"
    Ensure-And-Copy "$base/JOSE" "$($joseFolder.FullName)/@ytaianaphotos-211.jpg" "foto2.jpg"
    Ensure-And-Copy "$base/JOSÉ" "$($joseFolder.FullName)/@ytaianaphotos-69.jpg" "foto1.jpg"
    Ensure-And-Copy "$base/JOSÉ" "$($joseFolder.FullName)/@ytaianaphotos-211.jpg" "foto2.jpg"
}

# LIVIA / LÍVIA
$liviaFolder = Get-ChildItem Fotos | Where-Object { $_.Name -like "L*VIA*" } | Select-Object -First 1
if ($liviaFolder) {
    Ensure-And-Copy "$base/LIVIA" "$($liviaFolder.FullName)/@ytaianaphotos-104.jpg" "foto1.jpg"
    Ensure-And-Copy "$base/LIVIA" "$($liviaFolder.FullName)/@ytaianaphotos-194.jpg" "foto2.jpg"
    Ensure-And-Copy "$base/LÍVIA" "$($liviaFolder.FullName)/@ytaianaphotos-104.jpg" "foto1.jpg"
    Ensure-And-Copy "$base/LÍVIA" "$($liviaFolder.FullName)/@ytaianaphotos-194.jpg" "foto2.jpg"
}

# MISAEL
Ensure-And-Copy "$base/MISAEL" "Fotos/MISAEL/@ytaianaphotos-227.jpg" "foto1.jpg"
Ensure-And-Copy "$base/MISAEL" "Fotos/MISAEL/@ytaianaphotos-132.jpg" "foto2.jpg"

# MYCEIA
Ensure-And-Copy "$base/MYCEIA" "Fotos/MYCEIA/@ytaianaphotos-200.jpg" "foto1.jpg"
Ensure-And-Copy "$base/MYCEIA" "Fotos/MYCEIA/@ytaianaphotos-19.jpg" "foto2.jpg"

# TAYANE
Ensure-And-Copy "$base/TAYANE" "Fotos/TAYANE/@ytaianaphotos-241.jpg" "foto1.jpg"
Ensure-And-Copy "$base/TAYANE" "Fotos/TAYANE/@ytaianaphotos-238.jpg" "foto2.jpg"

# WERVERSON
Ensure-And-Copy "$base/WERVERSON" "Fotos/WERVERSON/@ytaianaphotos-232.jpg" "foto1.jpg"
Ensure-And-Copy "$base/WERVERSON" "Fotos/WERVERSON/@ytaianaphotos-125.jpg" "foto2.jpg"

Write-Host "All photos successfully mapped to $base!"
