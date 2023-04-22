function getPlayerEntity(me) {
  console.log('getPlayerEntity');
  class PlayerEntity extends me.Entity {
    constructor(x, y, settings) {
      super(x, y, settings);
      this.speed = 5;
      if (settings.image) {
        settings.image.addEventListener("loaded", () => {
          this.renderable.addAnimation("stand", [0]);
          this.renderable.addAnimation("walk", [1, 2, 3, 4, 5, 6, 7, 8], 80);
          this.renderable.setCurrentAnimation("stand");
        });
      }
      if (this.body) {
        this.body.addShape(new me.Rect(0, 0, 32, 64));
      }
    }
  }
  return PlayerEntity;
}