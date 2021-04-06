class Game {
    constructor() {
        this.playerImage;
        this.backgroundImage;
    }

    setup() {
        this.player = new Player();
        this.background = new Background; 
    }

    preload() {
        this.backgroundImage = loadImage('assets/background/backgroundImage.png');
        this.playerImage = loadImage ('assets/playerImages/glockWait.png');
    }

    draw() {
        this.background.draw();
        this.player.draw();
    }

}