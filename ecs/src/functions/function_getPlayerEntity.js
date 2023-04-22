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
  }
  return PlayerEntity;
}