const acorn = require('acorn');
function addConsoleLogToFunction(parsed) {
  console.log('addConsoleLogToFunction');
  const functionNode = parsed.body.find(node => node.type === 'FunctionDeclaration');
  const functionName = functionNode.id.name;
  const consoleLogNode = acorn.parse(`console.log('${functionName}');`).body[0];
  functionNode.body.body.unshift(consoleLogNode);
  return parsed;
}
const code = 'function hello() { console.log("Hello, world!"); }';
const parsed = acorn.parse(code);
const modified = addConsoleLogToFunction(parsed);
console.log(modified.toString());
