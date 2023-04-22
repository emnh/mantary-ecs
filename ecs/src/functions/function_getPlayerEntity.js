function getPlayerEntity() {
  console.log('getPlayerEntity');
  class PlayerEntity extends me.Entity {
    constructor(x, y, settings) {
      super(x, y, {
        width: settings.width,
        height: settings.height
      });
      this.renderable = new me.Sprite(0, 0, {
        image: settings.image,
        framewidth: 64,
        frameheight: 64
      });
      this.renderable.addAnimation("walk", [0, 1, 2, 3, 4, 5, 6, 7]);
      this.renderable.setCurrentAnimation("walk");
    }
  }
  return PlayerEntity;
}