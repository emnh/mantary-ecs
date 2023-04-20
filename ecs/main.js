import * as ecsy from 'ecsy';
import mori from 'mori';
import * as me from "melonjs";

const { device } = me;

const { World, System, Component, TagComponent, Types } = ecsy;

// ecsy components
class Position extends ecsy.Component { }
Position.schema = {
    x: { type: ecsy.Types.Number },
    y: { type: ecsy.Types.Number },
};

class Velocity extends ecsy.Component { }
Velocity.schema = {
    x: { type: ecsy.Types.Number },
    y: { type: ecsy.Types.Number },
};

// ecsy systems
class MovementSystem extends ecsy.System {
    execute(delta) {
        this.queries.movingEntities.results.forEach((entity) => {
            const position = entity.getComponent(Position);
            const velocity = entity.getComponent(Velocity);

            entity.getMutableComponent(Position).x += velocity.x * delta;
            entity.getMutableComponent(Position).y += velocity.y * delta;
        });
    }
}

MovementSystem.queries = {
    movingEntities: {
        components: [Position, Velocity],
    },
};

const main = function () {

    // Create a melonJS game
    const game = new me.video.init(800, 600, {
        wrapper: "screen",
        scale: "auto",
        scaleMethod: "fit",
    });

    // Add game state
    const gameStates = {
        "play": new me.Container(),
    };

    // Initialize melonJS
    game.onload = function () {
        me.state.set(me.state.PLAY, gameStates.play);
        me.state.change(me.state.PLAY);

        // Create ecsy world and register the systems
        const world = new ecsy.World();
        world.registerSystem(MovementSystem);

        // Create a player entity
        const playerEntity = world.createEntity();
        playerEntity.addComponent(Position, { x: 100, y: 100 });
        playerEntity.addComponent(Velocity, { x: 50, y: 0 });

        // Game loop
        me.event.subscribe(me.event.STATE_UPDATE, function (delta) {
            // Update the ecsy world
            world.execute(delta / 1000);

            // Update the melonJS container
            gameStates.play.update(delta);

            // Draw the player
            me.video.renderer.fillRect(
                playerEntity.getComponent(Position).x,
                playerEntity.getComponent(Position).y,
                32, 48, "blue"
            );
        });
    };

    // Boot the game
    // game.boot();
    me.state.change(me.state.PLAY);

};

device.onReady(() => {
    main();
});