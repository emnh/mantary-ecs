function getPlayerEntity(me) {
  class PlayerEntity extends me.Entity {
    constructor(x, y, settings) {
      super(x, y, settings);
      this.speed = 5;
      this.renderable.addAnimation("stand", [0]);
      this.renderable.addAnimation("walk", [1, 2, 3, 4, 5, 6, 7, 8], 80);
      this.renderable.setCurrentAnimation("stand");
      this.body.setShape(new me.Rect(0, 0, 32, 64));
    }
    update(dt) {
      let moved = false;
      if (me.input.isKeyPressed("left") || me.input.isKeyPressed("A")) {
        this.renderable.flipX(true);
        this.body.vel.x = -this.speed;
        this.renderable.setCurrentAnimation("walk");
        moved = true;
      }
      if (me.input.isKeyPressed("right") || me.input.isKeyPressed("D")) {
        this.renderable.flipX(false);
        this.body.vel.x = this.speed;
        this.renderable.setCurrentAnimation("walk");
        moved = true;
      }
      if (!moved) {
        this.body.vel.x = 0;
        this.renderable.setCurrentAnimation("stand");
      }
      if (me.input.isKeyPressed("up") || me.input.isKeyPressed("W")) {
        this.body.vel.y = -this.speed;
      } else if (me.input.isKeyPressed("down") || me.input.isKeyPressed("S")) {
        this.body.vel.y = this.speed;
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