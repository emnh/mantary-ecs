function getPlayerEntity(me) {
  console.log('getPlayerEntity');
  class PlayerEntity extends me.Entity {
    constructor(x, y) {
      const settings = {
        width: 32,
        height: 32
      };
      super(x, y, settings);
      this.body = new me.Body(this, new me.Rect(0, 0, settings.width, settings.height));
      this.body.addShape(new me.Polygon(0, 0, [new me.Vector2d(0, 0), new me.Vector2d(settings.width, 0), new me.Vector2d(settings.width, settings.height), new me.Vector2d(0, settings.height)]));
      this.body.collisionType = me.collision.types.PLAYER_OBJECT;
      this.body.setVelocity(3, 3);
      this.body.setMaxVelocity(3, 3);
      this.body.setFriction(0.4, 0.4);
      this.body.gravity.set(0, 0.1);
      this.renderable = new me.ColorLayer("player", "#00ff00", settings.width, settings.height);
    }
    update(dt) {
      if (me.input.isKeyPressed("left") || me.input.isKeyPressed("a")) {
        this.body.vel.x -= this.body.accel.x * me.timer.tick;
      } else if (me.input.isKeyPressed("right") || me.input.isKeyPressed("d")) {
        this.body.vel.x += this.body.accel.x * me.timer.tick;
      } else {
        this.body.vel.x = 0;
      }
      if (me.input.isKeyPressed("up") || me.input.isKeyPressed("w")) {
        this.body.vel.y -= this.body.accel.y * me.timer.tick;
      } else if (me.input.isKeyPressed("down") || me.input.isKeyPressed("s")) {
        this.body.vel.y += this.body.accel.y * me.timer.tick;
      } else {
        this.body.vel.y = 0;
      }
      this.body.update(dt);
      me.collision.check(this);
      return true;
    }
  }
  return PlayerEntity;
}