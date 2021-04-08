class Game {

    constructor() {
        this.playerImage;
        this.backgroundImage;
        this.cloudImage;
        this.pointsImage;
        this.score = 0;  
    }

    setup() {
        this.player = new Player();
        this.background = new Background(); 
        this.obstacles = [];
        this.points = new Points(this.pointsImage, 300, 400);
        this.cheese = [];
    }

    preload() {
        this.backgroundImage = loadImage('assets/background/backgroundImage.png');
        this.playerImage = loadImage('assets/playerImages/glockWait.png');
        this.cloudImage = loadImage('assets/cloudImage/cloud1.png');
        this.pointsImage = loadImage('assets/pointsImage/pointsImage.png');
    }

    draw() {
        this.background.draw();
        this.player.draw();
        this.points.draw();
        

        if (frameCount % 50 === 0) {
            this.obstacles.push(new Obstacle(this.cloudImage))
        }
        this.obstacles.forEach(function (obstacle) {
           obstacle.draw();
        })

        if (frameCount % 150 === 0) {
            this.cheese.push(new Points(this.pointsImage))
        }
        this.cheese.forEach(function (point) {
           point.draw();
        })

        document.querySelector('span').innerHTML = this.score;
        
    }
}