function addLevel(makeAnyEntity, world) {
  console.log('addLevel');
  me.game.world.addChild(new me.ColorLayer("background", "#808080"));
  const addPlatform = getAddPlatform(makeAnyEntity, world, "./images/platform2.png");
  const sp = 3.0;
  addPlatform(sp * 40, sp * 500);
  addPlatform(sp * 200, sp * 500);
  addPlatform(sp * 400, sp * 500);
  addPlatform(sp * 600, sp * 500);
}
