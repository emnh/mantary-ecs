function getAddPlatform(makeAnyEntity, world, imageURL) {
  if (('debug' in window) && window.debug) console.log('getAddPlatform');
  const platformImg = new Image();
  platformImg.src = imageURL;
  const s = 0.4;
  const width = Math.round(675 * s);
  const height = Math.round(618 * s);
  platformImg.width = width;
  platformImg.height = height;
  return function (x, y) {
    world.addChild(makeAnyEntity(x, y, {
      image: platformImg,
      width: width,
      height: height,
      scale: 1,
      ignoreGravity: true,
      myCollisionType: me.collision.types.WORLD_SHAPE,
      onCollision: (response, other) => {
        return false;
      }
    }));
  };
}
