#!/bin/bash
set -e
echo "🚀 Building and deploying resume-angular..."
ng build --configuration production --base-href "/Luca-Cigna.github.io/"
echo "✅ Build completed, deploying..."
npx angular-cli-ghpages --dir=dist/resume-angular/browser --repo=https://github.com/blackace25/Luca-Cigna.github.io.git --branch=gh-pages
echo "🎉 Done! Check https://blackace25.github.io/Luca-Cigna.github.io/"
