#!/bin/bash

# Ask for the input file name
read -p "Enter the name of the JPG file (including extension): " filename
read -p "Name of new webp files: " new_name

# Check if the file exists
if [[ ! -f "$filename" ]]; then
  echo "Error: File '$filename' not found!"
  exit 1
fi

# Convert the file to multiple WebP sizes
echo "Converting $filename to multiple WebP sizes..."
#add 3526, 100, and 450 for home image
for size in 300 721 1080 1420 1690 1920 2048 2500; do
  magick "$filename" -resize ${size}x -quality 80 "${new_name}-${size}w.webp"
done

echo "Conversion complete!"
