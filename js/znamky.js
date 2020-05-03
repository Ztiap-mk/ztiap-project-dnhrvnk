class Znamky{
  constructor(znamka, x2, y2) {
    this.image = document.getElementById(znamka)
    this.x = Math.floor(Math.random() * (canvas.width - 80)+20);
    this.y = Math.floor(Math.random() * (canvas.height/3) + canvas.height*1.7/3)
    this.x2 = x2;
    this.y2 = y2;
    this.ok = false;
    this.cas = 0;
    this.ktora = 0;
  }
  
  move(delta){
    var myska = sceny[1][2];
    for(i = 12; i < sceny[1].length; i++){
      var chytenie_znamky = this.x+10 >= myska.actX || this.x+ this.x2+10 <= myska.actX ||
                            this.y+10 >= myska.actY || this.y + this.y2+10 <= myska.actY;
      if(!chytenie_znamky){
        this.x -= myska.jednotkoveX;
        this.y -= myska.jednotkoveY; 
        myska.dole = false;
      }
      if(sceny[1][i].y <= canvas.height/2-10){
        sceny[1][4].vypocet_priemeru(sceny[1][i]);
        sceny[1][6].zmena_textu();
        sceny[1].splice(i, 1);
        if(zapnute) body_zvuk.play();
      }
      if(!chytenie_znamky && this["image"].id == "znamkaFX"){
            zmena_levelu();
            prave_scena = 2;
      }
    }

    this.cas += delta;
    if(this.cas >= 0.5){
      this.ktora = Math.floor(Math.random()*4)
      this.cas = 0;
    }
  };

  draw(delta) {
    ctx.save()
    ctx.drawImage(this.image, 598*this.ktora, 0, 661, 795, this.x, this.y, this.x2, this.y2);
    ctx.restore()
  }

  kolizia(){
    var zvuk = sceny[1][1];
    for(i = 12; i < sceny[1].length; i++){
      var obj = sceny[1][i];
      if(obj == this) continue;
      //test returne 0 ak sa prekrekryvaju
      var je_kolizia_znamok = this.x >= obj.x + obj.x2 || this.x + this.x2 <= obj.x ||
                              this.y >= obj.y + obj.y2 || this.y + this.y2 <= obj.y;
      var je_kolizia_zvuk = this.x >= zvuk.x + zvuk.velkost || this.x + this.x2 <= zvuk.x ||
                            this.y >= zvuk.y + zvuk.velkost || this.y + this.y2 <= zvuk.y;
      if(!je_kolizia_znamok || !je_kolizia_zvuk){
        this.x = Math.floor(Math.random() * (canvas.width - 80)+20);
        this.y = Math.floor(Math.random() * (canvas.height/3) +canvas.height*1.7/3)
        this.kolizia()
      }
    }
  }
}

class znamkaA extends Znamky{
  constructor() {
    super("znamkaA", 80, 80);
  }
}

class znamkaB extends Znamky{
  constructor() {
    super("znamkaB", 80, 80);
  }
}

class znamkaC extends Znamky{
  constructor() {
    super("znamkaC", 80, 80);
  }
}

class znamkaD extends Znamky {
  constructor() {
    super("znamkaD", 80, 80);
  }
}

class znamkaE extends Znamky{
  constructor() {
    super("znamkaE", 60, 80);
  }
}

class znamkaFX extends Znamky{
  constructor() {
    super("znamkaFX", 60, 60);
  }
  draw(){
    ctx.save()
    ctx.drawImage(this.image, this.x, this.y, this.x2, this.y2);
    ctx.restore()
  }
}