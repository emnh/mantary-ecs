function addConsoleLogToFunction(parsed) {
  // Find the FunctionDeclaration node
  const functionNode = parsed.body.find(node => node.type === 'FunctionDeclaration');

  // Add a console.log statement that outputs the function name
  const functionName = functionNode.id.name;
  const consoleLogNode = acorn.parse(`console.log('${functionName}');`).body[0];
  functionNode.body.body.unshift(consoleLogNode);

  // Return the modified parsed object
  return parsed;
}