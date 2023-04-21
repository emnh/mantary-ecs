function addConsoleLogToFunction(parsed) {
  console.log('addConsoleLogToFunction');
  const functionNode = parsed.body.find(node => node.type === 'FunctionDeclaration');
  const functionName = functionNode.id.name;
  const consoleLogNode = acorn.parse(`console.log('${functionName}');`).body[0];
  functionNode.body.body.unshift(consoleLogNode);
  return parsed;
}