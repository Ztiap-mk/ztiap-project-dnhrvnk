class myska {
    constructor() {
      this.image = document.getElementById("myska")
      this.x1 = canvas.width/2;
      this.y1 = canvas.height/2 - 60;
      this.x2 = canvas.width/2;
      this.y2 = canvas.height/2 - 30;
      this.uhol = 0.0;
      this.speed = 0.04;
      this.dole = true;

      this.act2X = this.x2;
      this.act2Y = this.y2;
    }

    draw() {

        ctx.beginPath();
        ctx.moveTo(0, canvas.height/2 - 50);
        ctx.lineTo(canvas.width, canvas.height/2-50);
        ctx.stroke();

          //ciara na mysku a jej rotacia
          ctx.save();
          ctx.beginPath();
          ctx.translate(this.x1, this.y1);
          ctx.rotate(this.uhol);
          ctx.translate(-this.x1, -this.y1); 
         
          var smer = aky_je_smer(this.x2,this.y2,ctx.getTransform());
          this.actX = smer.Fx;
          this.actY = smer.Fy;

          //vykreslenie ciary mysky
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

    move() {
      if(Math.abs(this.uhol) > Math.PI*0.5){
        this.speed = -this.speed;
      }
      if((vstupy[32] == 0 || vstupy[123] == 0)){
        this.uhol += this.speed;
      }

      //vstup z klavesnice a pohyb dole
      if((vstupy[32] == 1 || vstupy[123] == 1) && this.dole){
        if(bg_hudba.paused == 0) klikanie_hudba.play()
        bg_hudba.volume = 0.1
        this.y2 += 5;
        this.speed = 0;
      }
      if(this.actX < 0 || this.actX > canvas.width || this.actY > canvas.height){
        this.dole = false
      }
      if(!this.dole){
        this.y2 -= 5;
        vstupy[32] = 0;
        vstupy[123] = 0;
      }
      if(this.y2 == canvas.height/2 - 30 && !this.dole){
        this.y2 = canvas.height/2 - 30;
        this.speed = 0.04;
        klikanie_hudba.pause();
        bg_hudba.volume = 0.3;
        this.dole = true;
      }
  }
}