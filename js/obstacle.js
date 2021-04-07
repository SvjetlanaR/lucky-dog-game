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
    }
}

    
