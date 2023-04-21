function multiply(x, y) {
  console.log('multiply');
  return x * y;
}
function square(x) {
  return multiply(x, x);
}
const result = square(5);
console.log(result);
