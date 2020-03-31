class zvuk_zap {
    constructor() {
      this.image = document.getElementById("zvuk-zapnuty")
      this.x = 10;
      this.y = canvas.height - 60;
    }
    
    move(){};

    draw() {
      ctx.save()
      ctx.drawImage(this.image,  this.x, this.y, 50, 50)
      ctx.restore()
    }
  }