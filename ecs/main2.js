import * as me from "https://esm.run/melonjs@15";

class AnyEntity extends me.Entity {

    constructor(x, y, settings) {
        // call the constructor
        // console.log("CollisionType", settings.collisionType);
        super(x, y, settings);

        // this.renderable = 
        // new me.Sprite(x, y, {
        //     image: settings.image,
        //     spritewidth: settings.width,
        //     spriteheight: settings.height,
        //     framewidth: settings.width,
        //     frameheight: settings.height
        // });

        // this.renderable.scale(settings.scale, settings.scale);

        this.body.maxVel = settings.maxVel || { x: 0, y: 0 };
        this.body.ignoreGravity = settings.ignoreGravity;
        this.body.collisionType = settings.myCollisionType;
        this.onCollision = settings.onCollision || (() => { });
        const theThis = this;
        this.update = (dt) => (settings.update || (() => { }))(theThis, super.update.bind(this), dt);
    }

    onCollision(response, other) {
        return this.onCollision(response, other);
    }
}

function getAddPlatform(world, imageURL) {
    const platformImg = new Image();
    platformImg.src = imageURL;
    const s = 0.25;
    const width = Math.round(675 * s);
    const height = Math.round(618 * s);
    platformImg.width = width;
    platformImg.height = height;

    return function (x, y) {
        world.addChild(new AnyEntity(x, y, {
            image: platformImg,
            width: width,
            height: height,
            scale: 1,
            ignoreGravity: true,
            myCollisionType: me.collision.types.WORLD_SHAPE,
            onCollision: (response, other) => {
                // console.log("Collision", response, other);
                return false;
            }
        }));
    };
};

function setupInput() {
    me.input.bindKey(me.input.KEY.LEFT, "left");
    me.input.bindKey(me.input.KEY.RIGHT, "right");
    me.input.bindKey(me.input.KEY.X, "jump", true);
    me.input.bindKey(me.input.KEY.UP, "jump", true);
    me.input.bindKey(me.input.KEY.SPACE, "jump", true);
    me.input.bindKey(me.input.KEY.DOWN, "down");
}

function playerUpdate(thisPlayer, superUpdate, dt) {

    if (me.input.isKeyPressed("left")){
        if (thisPlayer.body.vel.y === 0) {
            // thisPlayer.renderable.setCurrentAnimation("walk");
        }
        thisPlayer.body.force.x = -thisPlayer.body.maxVel.x;
        thisPlayer.renderable.flipX(true);
    } else if (me.input.isKeyPressed("right")) {
        if (thisPlayer.body.vel.y === 0) {
            // thisPlayer.renderable.setCurrentAnimation("walk");
        }
        thisPlayer.body.force.x = thisPlayer.body.maxVel.x;
        thisPlayer.renderable.flipX(false);
    }

    if (me.input.isKeyPressed("jump")) {
        // thisPlayer.renderable.setCurrentAnimation("jump");
        thisPlayer.body.jumping = true;
        if (thisPlayer.multipleJump <= 2) {
            // easy "math" for double jump
            thisPlayer.body.force.y = -thisPlayer.body.maxVel.y * thisPlayer.multipleJump++;
            // me.audio.stop("jump");
            // me.audio.play("jump", false);
        }
    } else {
        if (!thisPlayer.body.falling && !thisPlayer.body.jumping) {
            // reset the multipleJump flag if on the ground
            thisPlayer.multipleJump = 1;
        }
        else if (thisPlayer.body.falling && thisPlayer.multipleJump < 2) {
            // reset the multipleJump flag if falling
            thisPlayer.multipleJump = 2;
        }
    }


    if (thisPlayer.body.force.x === 0 && thisPlayer.body.force.y === 0) {
        // thisPlayer.renderable.setCurrentAnimation("stand");
    }

    // check if we fell into a hole
    if (!thisPlayer.inViewport && (thisPlayer.pos.y > me.video.renderer.getHeight())) {
        // if yes reset the game
        me.game.world.removeChild(thisPlayer);
        me.game.viewport.fadeIn("#fff", 150, function(){
            me.audio.play("die", false);
            me.level.reload();
            me.game.viewport.fadeOut("#fff", 150);
        });
        return true;
    }

    // check if we moved (an "idle" animation would definitely be cleaner)
    if (thisPlayer.body.vel.x !== 0 || thisPlayer.body.vel.y !== 0 ||
        (thisPlayer.renderable && thisPlayer.renderable.isFlickering())
    ) {
        superUpdate(dt);
        return true;
    }
    return false;
}

me.device.onReady(function () {
    // initialize the display canvas once the device/browser is ready
    if (!me.video.init(window.innerWidth, window.innerHeight, { parent: "screen", scale: "auto" })) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }

    // add a gray background to the default Stage
    me.game.world.addChild(new me.ColorLayer("background", "#808080"));

    console.log("viewport camera", me.game.viewport);
    const world = me.game.world;
    const addPlatform = getAddPlatform(world, "./images/platform2.png");

    world.x = 0;
    world.y = 0;
    world.width = window.innerWidth;
    world.height = window.innerHeight;

    addPlatform(50, 500);
    addPlatform(200, 500);
    addPlatform(400, 500);
    addPlatform(600, 500);

    const playerImg = new Image();
    playerImg.src = "./images/protagonist.png";

    const s = 0.125;
    playerImg.width = 396 * s;
    playerImg.height = 579 * s;
    world.addChild(new AnyEntity(50, 0, {
        image: playerImg,
        height: playerImg.height,
        width: playerImg.width,
        scale: 1,
        ignoreGravity: false,
        update: playerUpdate,
        maxVel: { x: 5, y: 15 },
        myCollisionType: me.collision.types.PLAYER_OBJECT,
        onCollision: (response, other) => {
            // console.log("PlayerCollision", response, other);
            return true;
        }
    }));

    setupInput();

});