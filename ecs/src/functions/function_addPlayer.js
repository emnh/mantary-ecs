function addPlayer() {
  console.log('addPlayer');
  var player = new Player(0, 0);
  me.game.world.addChild(player);
}