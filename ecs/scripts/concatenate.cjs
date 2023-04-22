// WARNING: This script is deprecated.

const fs = require('fs');
const path = require('path');

const prelude = `
    import * as melonjs from 'melonjs';
    const me = melonjs;
`;

const postlude = `
    document.addEventListener("DOMContentLoaded", main);
`;

function concatenateJSFilesAndWatch(dirPath) {
    const mainFilePath = 'main.js';
    let content = '';

    function updateMainFile() {
        const files = fs.readdirSync(dirPath);
        const jsFiles = files.filter(file => path.extname(file) === '.js');
        content = jsFiles.reduce((accumulator, file) => {
            const filePath = path.join(dirPath, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            return accumulator + fileContent + '\n\n';
        }, '');
        content = prelude + content + postlude;
        try {
            fs.writeFileSync(mainFilePath, content);
        } catch (err) {
            console.error(err);
        }
        
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

concatenateJSFilesAndWatch('src/functions');