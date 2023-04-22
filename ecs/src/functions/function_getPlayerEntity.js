function getPlayerEntity(me) {
  console.log('getPlayerEntity');
  class PlayerEntity extends me.Entity {
    constructor(x, y, settings) {
      super(x, y, settings);
      this.renderable = new me.Renderable(0, 0, 32, 64);
      this.renderable.anchorPoint.set(0, 0);
      this.renderable.color = new me.Color(0, 255, 0);
      this.speed = 5;
      this.body = new me.Body(this);
      this.body.addShape(new me.Rect(0, 0, 32, 64));
    }
    update(dt) {
      if (me.input.isKeyPressed("left") || me.input.isKeyPressed("a")) {
        this.body.vel.x -= this.speed * me.timer.tick;
      } else if (me.input.isKeyPressed("right") || me.input.isKeyPressed("d")) {
        this.body.vel.x += this.speed * me.timer.tick;
      } else {
        this.body.vel.x = 0;
      }
      if (me.input.isKeyPressed("up") || me.input.isKeyPressed("w")) {
        this.body.vel.y -= this.speed * me.timer.tick;
      } else if (me.input.isKeyPressed("down") || me.input.isKeyPressed("s")) {
        this.body.vel.y += this.speed * me.timer.tick;
      } else {
        this.body.vel.y = 0;
      }
      this.body.update(dt);
      me.game.repaint();
      super.update(dt);
    }
    draw(renderer) {
      this.renderable.draw(renderer, this.pos.x, this.pos.y);
      super.draw(renderer);
    }
  }
  return PlayerEntity;
}