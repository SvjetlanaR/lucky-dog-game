class Obstacle {

    constructor(image) {
        this.image = image;
        this.x = Math.random() * width;
        this.y = random(-50, -100);
        this.width = 60;
        this.height = 60;
    }
   
    draw() {
        this.y += 4;
        image(this.image, this.x, this.y, this.width, this.height);
        this.collision(game.player);

    }

    collision(glockInfo) {
        const cloudX = this.x + this.width;
        const cloudY = this.y + this.height;

        const glockX = glockInfo.x + glockInfo.width;
        const glockY = glockInfo.y + glockInfo.height;

        if (dist(cloudX, cloudY, glockX, glockY) < 50) {
            alert('game over');
        } 

    }

}

    
