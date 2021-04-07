class Game {
    
    constructor() {
        this.playerImage;
        this.backgroundImage;
        this.cloudImage;
        this.pointsImage;
        
    }

    setup() {
        this.player = new Player();
        this.background = new Background(); 
        this.obstacles = [];
        this.points = new Points(this.pointsImage);
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

        if (frameCount % 60 === 0) {
            this.obstacles.push(new Obstacle(this.cloudImage))
        }
        this.obstacles.forEach(function (obstacle) {
           obstacle.draw();
        })

        
        
    }  
 }