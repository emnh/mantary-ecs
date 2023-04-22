function handleJump(thisPlayer) {
  if (('debug' in window) && window.debug) console.log('handleJump');
  if (me.input.isKeyPressed("jump")) {
    thisPlayer.body.jumping = true;
    if (thisPlayer.multipleJump <= 2) {
      thisPlayer.body.force.y = -thisPlayer.body.maxVel.y * thisPlayer.multipleJump++;
    }
  } else {
    if (!thisPlayer.body.falling && !thisPlayer.body.jumping) {
      thisPlayer.multipleJump = 1;
    } else if (thisPlayer.body.falling && thisPlayer.multipleJump < 2) {
      thisPlayer.multipleJump = 2;
    }
  }
}
