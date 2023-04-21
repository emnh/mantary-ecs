function addLevel() {
  console.log('addLevel');
  var level = new Level(0, 0);
  me.game.world.addChild(level);
}