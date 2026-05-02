const fs = require('fs');
const path = require('path');

// Move image if needed
const sourceDir = path.join(__dirname, 'images');
const destDir = path.join(__dirname, 'public', 'images');
const sourceFile = path.join(sourceDir, 'Logo.png');
const destFile = path.join(destDir, 'Logo.png');

if (fs.existsSync(sourceFile)) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.renameSync(sourceFile, destFile);
  console.log('Moved Logo.png to public/images/');
}

// Proceed to analyze
const PNG = require('pngjs').PNG;

if (fs.existsSync(destFile)) {
  fs.createReadStream(destFile)
    .pipe(new PNG({ filterType: 4 }))
    .on('parsed', function() {
      const colors = {};
      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          const idx = (this.width * y + x) << 2;
          const r = this.data[idx];
          const g = this.data[idx+1];
          const b = this.data[idx+2];
          const a = this.data[idx+3];
          
          if (a > 50) { // ignore mostly transparent pixels
              const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
              colors[hex] = (colors[hex] || 0) + 1;
          }
        }
      }
      
      const sortedColors = Object.entries(colors)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
        
      console.log("Top 10 Colors:");
      sortedColors.forEach(([hex, count]) => {
        console.log(`${hex}: ${count} pixels`);
      });
    });
} else {
  console.log('Logo.png not found at ' + destFile);
}
