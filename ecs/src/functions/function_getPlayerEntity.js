function getPlayerEntity() {
  console.log('getPlayerEntity');
  class PlayerEntity extends me.Entity {
    constructor(x, y, settings) {
      super(x, y, Object.assign(settings, {
        width: 32,
        height: 32
      }));
      this.body = new me.Body(this, new me.Rect(0, 0, 32, 32));
      this.body.setVelocity(3, 3);
      this.body.collisionType = me.collision.types.PLAYER_OBJECT;
      this.renderable = new me.ColorLayer("player", "#00ff00", 32, 32);
      this.anchorPoint.set(0.5, 0.5);
    }
    update(dt) {
      super.update(dt);
      if (me.input.isKeyPressed("left") || me.input.isKeyPressed("a")) {
        this.body.vel.x -= this.body.accel.x * me.timer.tick;
      }
      if (me.input.isKeyPressed("right") || me.input.isKeyPressed("d")) {
        this.body.vel.x += this.body.accel.x * me.timer.tick;
      }
      if (me.input.isKeyPressed("up") || me.input.isKeyPressed("w")) {
        this.body.vel.y -= this.body.accel.y * me.timer.tick;
      }
      if (me.input.isKeyPressed("down") || me.input.isKeyPressed("s")) {
        this.body.vel.y += this.body.accel.y * me.timer.tick;
      }
      this.body.update(dt);
      me.collision.check(this);
      return true;
    }
  }
  return PlayerEntity;
}