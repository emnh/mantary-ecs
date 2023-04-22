function getPlayerEntity(me) {
  console.log('getPlayerEntity');
  class PlayerEntity extends me.Entity {
    constructor(x, y, settings) {
      super(x, y, settings);
      console.log("settings:", settings);
    }
  }
  return PlayerEntity;
}