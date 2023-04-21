function keyIsDown(keyCode) {
  console.log('keyIsDown');
  return keyState[keyCode] || false;
}