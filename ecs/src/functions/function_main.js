function main() {
  console.log('main');
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 480;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const platforms = [{
    x: 100,
    y: 350,
    width: 100,
    height: 20
  }, {
    x: 400,
    y: 300,
    width: 100,
    height: 20
  }, {
    x: 200,
    y: 250,
    width: 100,
    height: 20
  }, {
    x: 100,
    y: 200,
    width: 100,
    height: 20
  }, {
    x: 400,
    y: 150,
    width: 100,
    height: 20
  }];
  const player = {
    x: 50,
    y: 300,
    width: 20,
    height: 20,
    velocityY: 0
  };
  let lastTimestamp = performance.now();
  function handleInput() {
    if (keyIsDown('ArrowLeft')) {
      player.x -= 5;
    }
    if (keyIsDown('ArrowRight')) {
      player.x += 5;
    }
    if (keyIsDown('ArrowUp') && player.velocityY === 0) {
      player.velocityY = -10;
    }
  }
  function gameLoop() {
    handleInput();
    lastTimestamp = drawGame(ctx, platforms, player, lastTimestamp);
    requestAnimationFrame(gameLoop);
  }
  requestAnimationFrame(gameLoop);
}