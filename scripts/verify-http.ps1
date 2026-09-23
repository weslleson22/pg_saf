$res = Invoke-WebRequest -Uri 'http://localhost:3000' -UseBasicParsing
Write-Host "Site HTTP Status:" $res.StatusCode
Write-Host "Contains 'Defesa Intransigente':" ($res.Content.Contains('Defesa Intransigente'))
Write-Host "Contains '/foto/SAF/equipe.jpg':" ($res.Content.Contains('/foto/SAF/equipe.jpg'))
Write-Host "Contains 'Dr. Anderson Fonseca':" ($res.Content.Contains('Dr. Anderson Fonseca'))
Write-Host "Contains 'Dra. Lívia Santos':" ($res.Content.Contains('Lívia Santos'))

# Test images
$img1 = Invoke-WebRequest -Uri 'http://localhost:3000/foto/SAF/equipe.jpg' -UseBasicParsing
Write-Host "/foto/SAF/equipe.jpg HTTP Status:" $img1.StatusCode "Bytes:" $img1.RawContentLength

$img2 = Invoke-WebRequest -Uri 'http://localhost:3000/foto/ANDERSON/foto1.jpg' -UseBasicParsing
Write-Host "/foto/ANDERSON/foto1.jpg HTTP Status:" $img2.StatusCode "Bytes:" $img2.RawContentLength

$img3 = Invoke-WebRequest -Uri 'http://localhost:3000/foto/ANDERSON/foto2.jpg' -UseBasicParsing
Write-Host "/foto/ANDERSON/foto2.jpg HTTP Status:" $img3.StatusCode "Bytes:" $img3.RawContentLength

$img4 = Invoke-WebRequest -Uri 'http://localhost:3000/foto/JOSE/foto1.jpg' -UseBasicParsing
Write-Host "/foto/JOSE/foto1.jpg HTTP Status:" $img4.StatusCode "Bytes:" $img4.RawContentLength

$img5 = Invoke-WebRequest -Uri 'http://localhost:3000/foto/LIVIA/foto1.jpg' -UseBasicParsing
Write-Host "/foto/LIVIA/foto1.jpg HTTP Status:" $img5.StatusCode "Bytes:" $img5.RawContentLength

$img6 = Invoke-WebRequest -Uri 'http://localhost:3000/foto/MISAEL/foto1.jpg' -UseBasicParsing
Write-Host "/foto/MISAEL/foto1.jpg HTTP Status:" $img6.StatusCode "Bytes:" $img6.RawContentLength

$img7 = Invoke-WebRequest -Uri 'http://localhost:3000/foto/MYCEIA/foto1.jpg' -UseBasicParsing
Write-Host "/foto/MYCEIA/foto1.jpg HTTP Status:" $img7.StatusCode "Bytes:" $img7.RawContentLength

$img8 = Invoke-WebRequest -Uri 'http://localhost:3000/foto/TAYANE/foto1.jpg' -UseBasicParsing
Write-Host "/foto/TAYANE/foto1.jpg HTTP Status:" $img8.StatusCode "Bytes:" $img8.RawContentLength

$img9 = Invoke-WebRequest -Uri 'http://localhost:3000/foto/WERVERSON/foto1.jpg' -UseBasicParsing
Write-Host "/foto/WERVERSON/foto1.jpg HTTP Status:" $img9.StatusCode "Bytes:" $img9.RawContentLength

foreach ($name in @('JOSE','LIVIA','MISAEL','MYCEIA','TAYANE','WERVERSON')) {
    $img = Invoke-WebRequest -Uri "http://localhost:3000/foto/$name/foto2.jpg" -UseBasicParsing
    Write-Host "/foto/$name/foto2.jpg HTTP Status:" $img.StatusCode "Bytes:" $img.RawContentLength
}
