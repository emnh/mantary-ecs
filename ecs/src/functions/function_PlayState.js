function PlayState() {
  console.log('PlayState');
  me.Container.apply(this, arguments);
  this.world = new me.Container();
  this.addChild(this.world);
}