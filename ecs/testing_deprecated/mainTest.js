import * as me from 'https://esm.run/melonjs';

// function update(sprite) {

// };

let lastTime = performance.now();
let lastTime2 = performance.now();
let lastTime3 = performance.now();

class Test extends me.Sprite {
    constructor(x, y, settings) {
        super(x, y, settings);
    }

    update(dt) {
        const elapsed = performance.now() - lastTime;
        lastTime = performance.now();
        console.log("update", dt, Math.round(elapsed));
        super.update(dt);
        return true;
    }

    draw(dt) {
        const elapsed = performance.now() - lastTime2;
        lastTime2 = performance.now();
        console.log("draw", Math.round(elapsed));
        super.draw(dt);
    }
};

function update(me) {
    me.game.world.update(10);
}

// function draw(dt) {
//     const elapsed = performance.now() - lastTime3;
//     lastTime3 = performance.now();
//     console.log("drawGlobal", dt, elapsed);
//     requestAnimationFrame(draw);
// }

// draw();

// upon device ready
me.device.onReady(function () {
    // me.game.world.fps = new me.Vector2d(1000, 1000);
    // me.timer.maxfps = 100;
    // me.timer.interpolation = true;

    // Initialize the video.
    if (!me.video.init(1218, 562, { parent: "screen", scale: "auto", antiAlias: true })) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }

    // me.game.world.fps = 100;
    
    // Update timings
    me.timer.maxfps = 100;
    // me.timer.interpolation = true;
    me.game.world.fps = 10;
    me.game.updateFrameRate();

    // set a gray background color
    me.game.world.backgroundColor.parseCSS("#202020");

    // add a text object in the center of the display
    me.game.world.addChild(new me.Text(609, 281, {
        font: "Arial",
        size: 160,
        fillStyle: "#FFFFFF",
        textBaseline: "middle",
        textAlign: "center",
        text: "Hello World !"
    }));

    const img = document.createElement('img');
    img.src = "./test.png";

    const sprite = new Test(400, 400, {
        image : img,
        framewidth : 400,
        frameheight : 400,
        anchorPoint : new me.Vector2d(0.5, 0.5)
    });

    // add the sprite to the container
    me.game.world.addChild(sprite);

    // me.state.change(100);

    // setInterval(() => update(me), 10);
    // me.game.world.draw
});