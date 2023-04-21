function chain(x, y, z) {
  const result1 = add(x, y);
  const result2 = multiply(result1, z);
  const result3 = subtract(result2, y);
  return result3;
}