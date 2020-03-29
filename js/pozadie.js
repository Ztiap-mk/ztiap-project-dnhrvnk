class pozadie {
    constructor() {
      this.image = document.getElementById("pozadie")
      this.x = canvas.width;
      this.y = canvas.height;
    }
  
    draw() {
      ctx.save()
      ctx.drawImage(this.image, 0, 0, this.x, this.y)
      ctx.restore()
    }
  }