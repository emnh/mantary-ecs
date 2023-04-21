const fs = require('fs');
const path = require('path');
function concatenateJSFiles(dirPath) {
  console.log('concatenateJSFiles');
  const files = fs.readdirSync(dirPath);
  const jsFiles = files.filter(file => path.extname(file) === '.js');
  const content = jsFiles.reduce((accumulator, file) => {
    const filePath = path.join(dirPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return accumulator + fileContent;
  }, '');
  fs.writeFileSync(path.join(dirPath, 'main.js'), content);
}
