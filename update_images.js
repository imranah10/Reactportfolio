const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src', 'components', 'AurelianCanvas.jsx');
let code = fs.readFileSync(targetFile, 'utf8');

const baseUrl = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/';

const updatedCode = code.replace(/import\s+(\w+)\s+from\s+['"]\.\.\/assets\/AurelianCanvas\/(.+?)['"];/g, (match, varName, assetPath) => {
    const encodedPath = assetPath.split('/').map(segment => encodeURIComponent(segment)).join('/');
    return `const ${varName} = '${baseUrl}${encodedPath}';`;
});

fs.writeFileSync(targetFile, updatedCode, 'utf8');
console.log('Successfully updated AurelianCanvas.jsx');
