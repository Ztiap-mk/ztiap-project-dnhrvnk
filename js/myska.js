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
      this.hore = true;
      this.mimo =false;
      this.act2X = this.x2;
      this.act2Y = this.y2;
    }

    draw() {
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

    move(delta) {
      if(pocet_levelov == 1) var rychlost_mysky = 300;
      else if(pocet_levelov == 2) var rychlost_mysky = 350;
      else var rychlost_mysky = 400;
      
      if(Math.abs(this.uhol) > Math.PI*0.5 && !this.mimo){
        this.speed = -this.speed;
        this.mimo = true;
      }else if (this.mimo){
        this.mimo = false;
      }

      if((vstupy[32] == 0 || vstupy[123] == 0)){
        this.uhol += this.speed * delta * (rychlost_mysky/3);
      }

      //vstup z klavesnice a pohyb dole
      if((vstupy[32] == 1 || vstupy[123] == 1) && this.dole){
        if(bg_hudba.paused == 0) klikanie_hudba.play()
        bg_hudba.volume = 0.1
        this.y2 += rychlost_mysky * delta;
        this.speed = 0;
        this.hore = false
      }
      if(this.actX < 0 || this.actX > canvas.width || this.actY > canvas.height){
        this.dole = false
      }
      if(this.y2 <= canvas.height/2 - 30 && !this.dole){
        this.y2 = canvas.height/2 - 30;
        this.speed = 0.04;
        klikanie_hudba.pause();
        bg_hudba.volume = 0.3;
        this.dole = true;
        this.hore = true
        vstupy[32] = 0;
        vstupy[123] = 0;
      } 
      if(!this.dole && !this.hore){
        this.y2 -= rychlost_mysky * delta;
      }
  }
}