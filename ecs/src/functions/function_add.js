function add(x, y) {
  console.log('add');
  return x + y;
}
function multiply(x, y) {
  return x * y;
}
function subtract(x, y) {
  return x - y;
}
function chain(x, y, z) {
  const result1 = add(x, y);
  const result2 = multiply(result1, z);
  const result3 = subtract(result2, y);
  return result3;
}
const x = 2;
const y = 3;
const z = 4;
const result = chain(x, y, z);
console.log(result);
