class myska {
    constructor() {
      this.image = document.getElementById("myska")
      this.x1 = canvas.width/2;
      this.y1 = canvas.height/2 - 60;
      this.x2 = canvas.width/2;
      this.y2 = canvas.height/2 - 30;
      this.uhol =0.0;
      this.speed = 0.025;
    }
    
    draw() {
      if(Math.abs(this.uhol) > Math.PI*0.5){
        this.speed = -this.speed;
      }
        this.uhol += this.speed;
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.x1, this.y1);
        ctx.rotate(this.uhol);
        ctx.translate(-this.x1, -this.y1);

        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineCap = "round";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath()
        ctx.restore();

        //obrazok mysky
        ctx.save();
        ctx.translate(this.x1, this.y1);
        ctx.rotate(this.uhol);
        ctx.translate(-this.x1, -this.y1);
        ctx.drawImage(this.image,  this.x2-25, this.y2, 50, 50)
        ctx.restore()
    }
  }