function drawPlatform(container, x, y, width, height, image) {
  console.log('drawPlatform');
  const platform = new me.Entity(x, y, {
    width: width,
    height: height,
    collidable: true,
    type: me.collision.types.WORLD_SHAPE
  });
  platform.renderable = new me.Sprite(0, 0, {
    image: image
  });
  container.addChild(platform);
  me.game.world.addChild(platform);
}