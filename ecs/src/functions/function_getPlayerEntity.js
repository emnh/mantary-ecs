function getPlayerEntity(me) {
  console.log('getPlayerEntity');
  class PlayerEntity extends me.Entity {
    constructor(x, y, settings) {
      settings = settings || ({});
      settings.width = settings.width || 32;
      settings.height = settings.height || 64;
      super(x, y, settings);
      this.renderable = new me.Renderable(0, 0, settings.width, settings.height);
      this.renderable.anchorPoint.set(0.5, 0.5);
      this.renderable.color = new me.Color(0, 255, 0);
      this.addChild(this.renderable);
      this.speed = 5;
      this.body = new me.Body(this);
      this.body.addShape(new me.Rect(0, 0, settings.width, settings.height));
    }
  }
  return PlayerEntity;
}