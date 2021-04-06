class Player {

    constructor() {
        this.x = 400;
        this.y = 500;
        this.width = 150;
        this.height = 100;
    }
    
    draw() {
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }

}