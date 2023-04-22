function handleMoveMentLeftRight(thisPlayer) {
  if (('debug' in window) && window.debug) console.log('handleMoveMentLeftRight');
  if (me.input.isKeyPressed("left")) {
    if (thisPlayer.body.vel.y === 0) {}
    thisPlayer.body.force.x = -thisPlayer.body.maxVel.x;
    thisPlayer.renderable.flipX(true);
  } else if (me.input.isKeyPressed("right")) {
    if (thisPlayer.body.vel.y === 0) {}
    thisPlayer.body.force.x = thisPlayer.body.maxVel.x;
    thisPlayer.renderable.flipX(false);
  } else {
    thisPlayer.body.force.x = 0;
    thisPlayer.body.vel.x = 0;
  }
}
