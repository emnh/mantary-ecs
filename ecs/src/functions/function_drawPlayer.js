function drawPlayer(container, x, y, width, height, image) {
  console.log('drawPlayer');
  const player = new me.Sprite(x, y, {
    image: image,
    framewidth: 64,
    frameheight: 64
  });
  player.scale(width / player.width, height / player.height);
  container.addChild(player);
}