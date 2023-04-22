function getPlayerEntity(x, y, settings) {
  console.log('getPlayerEntity');
  class PlayerEntity extends me.Entity {
    constructor(x, y, settings) {
      settings = settings || ({});
      settings.width = settings.width || 32;
      settings.height = settings.height || 64;
      super(x, y, settings);
      this.speed = 5;
      this.body = new me.Body(this);
      this.body.addShape(new me.Rect(0, 0, settings.width, settings.height), true);
      this.body.collisionType = me.collision.types.PLAYER_OBJECT;
      const renderable = new me.Renderable(0, 0, settings.width, settings.height);
      renderable.anchorPoint.set(0.5, 0.5);
      renderable.color = new me.Color(0, 255, 0);
      this.body.setShape(renderable);
    }
    update(dt) {
      super.update(dt);
      if (me.input.isKeyPressed("left") || me.input.isKeyPressed("A")) {
        this.body.vel.x -= this.speed * me.timer.tick;
      } else if (me.input.isKeyPressed("right") || me.input.isKeyPressed("D")) {
        this.body.vel.x += this.speed * me.timer.tick;
      }
      if (me.input.isKeyPressed("up") || me.input.isKeyPressed("W")) {
        this.body.vel.y -= this.speed * me.timer.tick;
      } else if (me.input.isKeyPressed("down") || me.input.isKeyPressed("S")) {
        this.body.vel.y += this.speed * me.timer.tick;
      }
      this.body.update(dt);
      return true;
    }
  }
  return new PlayerEntity(x, y, settings);
}