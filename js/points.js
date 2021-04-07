class Points {
    
    constructor(image) {
        this.image = image;
        this.x = 300; 
        this.y = 400;
        this.width = 40;
        this.height = 40;
    }


    draw() {
        image(this.image, this.x, this.y, this.width, this.height);
    }
    
}