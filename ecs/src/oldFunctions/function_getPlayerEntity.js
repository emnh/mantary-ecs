function getPlayerEntity() {
  console.log('getPlayerEntity');
  class PlayerEntity extends me.Entity {
    constructor(x, y, settings) {
      super(x, y, settings);
      this.alwaysUpdate = true;
      this.renderable.addAnimation("walk", [0, 1, 2, 3, 4, 5, 6, 7]);
      this.renderable.setCurrentAnimation("walk");
      this.body.setMaxVelocity(3, 15);
      me.game.viewport.follow(this, me.game.viewport.AXIS.BOTH, 0.1);
    }
    update(dt) {
      if (me.input.isKeyPressed("left")) {
        this.body.vel.x -= this.body.accel.x * me.timer.tick;
        this.renderable.flipX(true);
      } else if (me.input.isKeyPressed("right")) {
        this.body.vel.x += this.body.accel.x * me.timer.tick;
        this.renderable.flipX(false);
      } else {
        this.body.vel.x = 0;
      }
      if (me.input.isKeyPressed("jump")) {
        if (!this.body.jumping && !this.body.falling) {
          this.body.vel.y = -this.body.maxVel.y * me.timer.tick;
          this.body.jumping = true;
        }
      }
      this.body.update(dt);
      me.collision.check(this);
      return super.update(dt);
    }
    onCollision(response, other) {
      if (other.body.collisionType === me.collision.types.WORLD_SHAPE) {
        if (response.b.y > 0) {
          this.body.falling = false;
          this.body.vel.y = -this.body.maxVel.y * me.timer.tick;
          this.body.jumping = true;
        }
      }
    }
  }
  return PlayerEntity;
}