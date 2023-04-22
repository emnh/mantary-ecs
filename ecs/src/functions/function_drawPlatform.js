function drawPlatform(game, x, y, width, height, image) {
  console.log('drawPlatform');
  const platform = new me.Sprite(x, y, {
    image: image
  });
  platform.anchorPoint.set(0, 0);
  platform.width = width;
  platform.height = height;
  game.addChild(platform);
}