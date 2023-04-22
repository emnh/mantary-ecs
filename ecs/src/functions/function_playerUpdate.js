function playerUpdate(thisPlayer, superUpdate, dt) {
  if (('debug' in window) && window.debug) console.log('playerUpdate');
  handleMoveMentLeftRight(thisPlayer);
  handleJump(thisPlayer);
  if (thisPlayer.body.force.x === 0 && thisPlayer.body.force.y === 0) {}
  if (!thisPlayer.inViewport && thisPlayer.pos.y > me.video.renderer.getHeight()) {
    me.game.world.removeChild(thisPlayer);
    me.game.viewport.fadeIn("#fff", 150, function () {
      me.audio.play("die", false);
      me.level.reload();
      me.game.viewport.fadeOut("#fff", 150);
    });
    return true;
  }
  if (thisPlayer.body.vel.x !== 0 || thisPlayer.body.vel.y !== 0 || thisPlayer.renderable && thisPlayer.renderable.isFlickering()) {
    superUpdate(dt);
    return true;
  }
  return false;
}
