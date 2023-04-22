function getAnyEntity() {
  if (('debug' in window) && window.debug) console.log('getAnyEntity');
  let counter = 0;
  class AnyEntity extends me.Entity {
    constructor(x, y, settings) {
      super(x, y, settings);
      this.renderable.scale(settings.scale, settings.scale);
      this.body.maxVel = settings.maxVel || ({
        x: 0,
        y: 0
      });
      this.body.ignoreGravity = settings.ignoreGravity;
      this.body.collisionType = settings.myCollisionType;
      this.onCollision = settings.onCollision || (() => {});
      const theThis = this;
      this.update = dt => (settings.update || (() => {}))(theThis, super.update.bind(this), dt);
      this.id = counter;
      counter += 1;
      this.src = settings.image.src;
    }
    onCollision(response, other) {
      return thisRenderable.onCollision(response, other);
    }
  }
  const newLessConstructor = function (x, y, settings) {
    return new AnyEntity(x, y, settings);
  };
  return newLessConstructor;
}
