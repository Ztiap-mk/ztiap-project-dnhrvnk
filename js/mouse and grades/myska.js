class myska {
    constructor() {
      this.image = document.getElementById("myska")
      this.x1 = canvas.width/2;
      this.y1 = canvas.height/2 - 60;
      this.x2 = canvas.width/2;
      this.y2 = canvas.height/2 - 30;
      this.uhol = 0.0;
      this.smer_rotacie = 0.04;
      this.dole = true;
      this.hore = true;
      this.mimo = false;
      this.jednotkoveX = 0;
      this.jednotkoveY = 0;
      this.farba_mysky = 0;

      this.cas = 0;
      this.bonus = true;
    }

    draw() {
          //ciara na mysku a jej rotacia
          ctx.save();
          ctx.beginPath();
          ctx.translate(this.x1, this.y1);    //posunutie
          ctx.rotate(this.uhol);              //otočenie
          ctx.translate(-this.x1, -this.y1);  //posunutie naspäť
         
          var smer = aky_je_smer(this.x2, this.y2, ctx.getTransform()); 
          this.actX = smer.Fx;    //aby sme vedeli kde sa aktuálne X/Y nachádza
          this.actY = smer.Fy;

          //vykreslenie ciary mysky
          ctx.moveTo(this.x1, this.y1);
          ctx.lineTo(this.x2, this.y2);
          ctx.lineWidth = 3;
          ctx.stroke();
          ctx.closePath()
          ctx.restore();

          //obrazok mysky
          ctx.save();
          ctx.translate(this.x1, this.y1);
          ctx.rotate(this.uhol);
          ctx.translate(-this.x1, -this.y1);
          ctx.drawImage(this.image, 225*this.farba_mysky, 0, 250, 250, this.x2-25, this.y2, 55, 55);
          ctx.restore()
    }

    move(delta) {
      var x = this.actX-this.x1;            //zisťovanie akým smerom sa má posúvať chytená známka
      var y = this.actY-this.y1;            
      var velkost = Math.sqrt(x*x + y*y)    //veľkosž vektora
      this.jednotkoveX = (x)/velkost;       //vzorec na jednotkový vektor
      this.jednotkoveY = (y)/velkost;       //aby sa s tým lepšie počítalo
      
      if(pocet_levelov == 1) var rychlost_mysky = 350;        //rýchlosti rotácie myšky
      else if(pocet_levelov == 2) var rychlost_mysky = 400;
      else var rychlost_mysky = 450;
      
      if(Math.abs(this.uhol) > Math.PI*0.5 && !this.mimo){    //ak náhodou vyjde myška tam kde nemá byť
        this.smer_rotacie = -this.smer_rotacie;
        this.mimo = true;
      } else if (this.mimo){
        this.mimo = false;
      }

      if((vstupy[32] == 0 || vstupy[123] == 0)){    //keď nebola kliknutá klávesnica/myška
        this.uhol += this.smer_rotacie * delta * (rychlost_mysky/3);   //tak sa len kýve
      }

      //vstup z klavesnice a pohyb dole
      if((vstupy[32] == 1 || vstupy[123] == 1) && this.dole && nechod_dole === 1){
        if(zapnute) klikanie_hudba.play();
        bg_hudba.volume = 0.1
        this.y2 += rychlost_mysky * delta;    //ide dole
        this.smer_rotacie = 0;
        this.hore = false
      }
      if(this.actX < 0 || this.actX > canvas.width || this.actY > canvas.height){   //ak narazí na okraj hracej plochy
        this.dole = false   //už dole ísť nemá
      }
      if(this.y2 <= canvas.height/2 - 30 && !this.dole){    //ak vyjde na počiatočnú pozíciu
        this.y2 = canvas.height/2 - 30;       
        this.smer_rotacie = 0.04;          
        klikanie_hudba.pause();       
        bg_hudba.volume = 0.2;  
        this.dole = true; 
        this.hore = true  
        vstupy[32] = 0;
        vstupy[123] = 0;
      } 
      if(!this.dole && !this.hore){       //ide hore
        this.y2 -= rychlost_mysky * delta;
      }
      if(!nechod_dole){
        nechod_dole = 1;
      }

      //-------------------------
      this.cas += delta;
      if(this.bonus && this.cas >= sekundy-10) {            //ak je do konca hry už len 10 sekund
          this.bonus = false;  
          sceny[1].push(new bonus());                   //pridá sa na scénu bonus
          sceny[1][sceny[1].length - 1].kolizia();       
      }
  }
}