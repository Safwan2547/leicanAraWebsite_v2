#!/bin/bash

# This module converts all JPEG and PNG images in a folder to WebP format.
# It then removes the original images.

# Specify the folder containing the images
input_folder="./src/Assets/"

# Change to the input folder
cd "$input_folder" || exit

# Find all JPEG and PNG files and convert them to WebP
find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -exec sh -c '
    for input_file do
        output_file="${input_file%.*}.webp"
        cwebp "$input_file" -o "$output_file" && rm "$input_file"
    done
' sh {} +

echo "Conversion and removal completed."
