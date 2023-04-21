function createPlayer(x, y, color) {
  console.log('createPlayer');
  return {
    x: x,
    y: y,
    width: 50,
    height: 50,
    speed: 5,
    color: color,
    jumping: false,
    jumpSpeed: 0,
    jumpHeight: 150,
    gravity: 0.5
  };
}