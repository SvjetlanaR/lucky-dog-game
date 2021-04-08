class Points {

    constructor(image) {
        this.image = image;
        this.x = 200; 
        this.y = 300;
        this.width = 40;
        this.height = 40;
    }

    draw() {
        image(this.image, this.x, this.y, this.width, this.height);
        this.collision(game.player)
    }

    setRandomPosition() {
        this.x = Math.floor(Math.random()*900);
        this.y = Math.floor(Math.random()*600);
    }

    collision(dog) {
        const pointsX = this.x + this.width + 50;
        const pointsY = this.y + this.height;

        const dogX = dog.x + dog.width;
        const dogY = dog.y + dog.height;

        if (dist(pointsX, pointsY, dogX, dogY) < 70) {

        game.score++ 
        this.setRandomPosition();
        }
    }
}