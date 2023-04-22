function drawRectangle(game, x, y, width, height, color) {
  const rect = new me.Renderable(x, y, width, height);
  rect.draw = function (renderer) {
    renderer.setColor(color);
    renderer.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  };
  game.world.addChild(rect);
}