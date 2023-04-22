function findDepth(node) {
  console.log('findDepth');
  let depth = 0;
  let current = node;
  while (current.parent !== null) {
    current = current.parent;
    depth++;
  }
  return depth;
}
