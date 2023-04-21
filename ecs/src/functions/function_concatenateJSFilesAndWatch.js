function concatenateJSFilesAndWatch(dirPath) {
  const mainFilePath = path.join(dirPath, 'main.js');
  let content = '';

  function updateMainFile() {
    const files = fs.readdirSync(dirPath);
    const jsFiles = files.filter(file => path.extname(file) === '.js');
    content = jsFiles.reduce((accumulator, file) => {
      const filePath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return accumulator + fileContent;
    }, '');
    fs.writeFileSync(mainFilePath, content);
    console.log(`main.js updated with ${jsFiles.length} files`);
  }

  // initial concatenation of files
  updateMainFile();

  // watch for changes in the directory
  fs.watch(dirPath, (eventType, filename) => {
    console.log(`event type: ${eventType}`);
    if (eventType === 'change' && filename && path.extname(filename) === '.js') {
      console.log(`filename: ${filename}`);
      updateMainFile();
    }
  });
}