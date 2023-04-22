function getPlayerEntity(me) {
  console.log('getPlayerEntity');
  class PlayerEntity extends me.Entity {
    constructor(x, y, settings) {
      super(x, y, settings);
      this.body.setVelocity(3, 3);
      this.body.setMaxVelocity(5, 5);
      this.body.setFriction(0.4, 0.4);
      this.body.gravity.set(0, 0);
      const shape = new me.Rect(0, 0, settings.width, settings.height);
      this.body.addShape(shape);
      this.renderable = new me.ColorLayer("green", "#00ff00", 0, 0, settings.width, settings.height);
    }
    update(dt) {
      if (me.input.isKeyPressed("left") || me.input.isKeyPressed("A")) {
        this.body.vel.x -= this.body.accel.x * me.timer.tick;
      } else if (me.input.isKeyPressed("right") || me.input.isKeyPressed("D")) {
        this.body.vel.x += this.body.accel.x * me.timer.tick;
      } else {
        this.body.vel.x = 0;
      }
      if (me.input.isKeyPressed("up") || me.input.isKeyPressed("W")) {
        this.body.vel.y -= this.body.accel.y * me.timer.tick;
      } else if (me.input.isKeyPressed("down") || me.input.isKeyPressed("S")) {
        this.body.vel.y += this.body.accel.y * me.timer.tick;
      } else {
        this.body.vel.y = 0;
      }
      this.body.update(dt);
      me.collision.check(this);
      return super.update(dt);
    }
  }
  return PlayerEntity;
}