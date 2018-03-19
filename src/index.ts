import 'phaser';
declare const Phaser: any;

class Game {
    game: Phaser.Game;

    constructor() {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            scene: {
                preload: this.preload,
                create: this.create,
                update: this.update
            }
        };

        this.game = new Phaser.Game(config);
    }

    preload() {
        this.load.image('logo', 'assets/logo.png');
    }

    create() {
        const logo = this.add.image(400, 150, 'logo');

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });
    }

    update() {}
}

window.onload = () => {
    const game: Game = new Game();
};
