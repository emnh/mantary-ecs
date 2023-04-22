function getPlayerEntity() {
  console.log('getPlayerEntity');
  class PlayerEntity extends me.Entity {
    constructor(x, y, settings) {
      super(x, y, settings);
      this.body.setVelocity(3, 3);
      this.body.setMaxVelocity(6, 6);
      me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
      this.alwaysUpdate = true;
      const gfx = new me.GraphicsRenderer();
      gfx.createRenderable(0, 0, this.width, this.height);
      gfx.fillStyle = "#00FF00";
      gfx.fillRect(0, 0, this.width, this.height);
      this.renderable = gfx;
      setupKeyboardInput.call(this);
    }
    update(dt) {
      this.body.update(dt);
      me.collision.check(this);
      if (this.body.vel.x !== 0 || this.body.vel.y !== 0) {
        this._super(me.Entity, "update", [dt]);
        return true;
      }
      return false;
    }
  }
  return PlayerEntity;
}