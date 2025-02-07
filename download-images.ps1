$ErrorActionPreference = "Stop"

$imageUrls = @{
    "oulu.jpg" = "https://images.unsplash.com/photo-1711432909-i_shi2JstvQ"
    "paris.jpg" = "https://images.unsplash.com/photo-1679184342784-5tGfn5q-Gpc"
    "regensburg.jpg" = "https://images.unsplash.com/photo-1671733423477-gC1eFx6jX1U"
    "san-francisco.jpg" = "https://images.unsplash.com/photo-1698216540897-m2b9dWqn5R0"
}

$outputDir = "src/assets/images/tours"

if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
}

foreach ($image in $imageUrls.GetEnumerator()) {
    $outputPath = Join-Path $outputDir $image.Key
    Write-Host "Downloading $($image.Value) to $outputPath"
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}
