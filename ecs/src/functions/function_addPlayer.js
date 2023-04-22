function addPlayer(makeAnyEntity, world) {
  console.log('addPlayer');
  const playerImg = new Image();
  playerImg.src = "./images/protagonist.png";
  const s = 0.4;
  const width = 396 * s;
  const height = 579 * s;
  playerImg.width = width;
  playerImg.height = height;
  const player = makeAnyEntity(50, 0, {
    image: playerImg,
    height: height,
    width: width,
    scale: 1,
    ignoreGravity: false,
    update: playerUpdate,
    maxVel: {
      x: 5,
      y: 15
    },
    myCollisionType: me.collision.types.PLAYER_OBJECT,
    onCollision: (response, other) => {
      return true;
    }
  });
  world.addChild(player);
  me.game.viewport.follow(player, me.game.viewport.AXIS.BOTH, 0.1);
  setupInput();
}
