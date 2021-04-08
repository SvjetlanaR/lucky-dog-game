class Player {

    constructor() {
        this.gravity = 2;
        this.velocity = 0;
        this.x = 400;
        this.y = 500;
        this.width = 150;
        this.height = 100;
        this.image;
        this.name = 'Glock';
    }
    
    moveLeft() {
        this.x -= 10;
    }
    moveRight() {
        this.x += 10;
    }

    draw() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        this.x = constrain(this.x, 0, (width - this.width));
        this.y = constrain(this.y, 0, (height - this.height));

        image(game.playerImage, this.x, this.y, this.width, this.height);

        if (keyIsDown(37)) {
            this.moveLeft();
        }
        if (keyIsDown(39)) {
            this.moveRight();
        }
        
    }

    jump() {
        this.velocity = -30;
    }

}