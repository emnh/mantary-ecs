function checkFunctionLevel(node) {
  console.log('checkFunctionLevel');
  let current = node;
  while (current.parent !== null) {
    current = current.parent;
    if (current.type === "FunctionDeclaration" || current.type === "FunctionExpression") {
      return "contained in a function";
    }
  }
  return "top-level function";
}