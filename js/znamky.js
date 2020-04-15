class Znamky{
  constructor(znamka, x2, y2) {
    this.image = document.getElementById(znamka)
    this.x = Math.floor(Math.random() * ((canvas.width - 50) + 1) );
    this.y = canvas.height - Math.floor(Math.random() * ((canvas.height - 50) - 160 + 1) + 150)/2;
    this.x2 = x2;
    this.y2 = y2;
    this.ok = false;
  }
  
  move(){
    var myska = sceny[1][2];
    for(i = 12; i < sceny[1].length; i++){
      var chytenie_znamky = this.x >= myska.actX-25 + 50 || this.x + this.x2 <= myska.actX-25 ||
                            this.y >= myska.actY + 50 || this.y + this.y2 <= myska.actY;
      if(!chytenie_znamky){
        this.y -= 5;
        myska.dole = false;

        if(sceny[1][i].y <= canvas.height/2-50){
          console.log(sceny[1][i].y)
          sceny[1][6].zmena_textu()
          sceny[1].splice(i, 1);
        }
      }
    }
  };

  draw() {
    ctx.save()
    ctx.drawImage(this.image,  this.x, this.y, this.x2, this.y2)
    ctx.restore()
  }

  kolizia(){
    for(i = 12; i < sceny[1].length; i++){
      var obj = sceny[1][i];
      if(obj == this) continue;
      //test returne 0 ak sa prekrekryvaju
      var je_kolizia = this.x >= obj.x + obj.x2 || this.x + this.x2 <= obj.x ||
                  this.y >= obj.y + obj.y2 || this.y + this.y2 <= obj.y;  
      if(!je_kolizia){
        this.x = Math.floor(Math.random() * ((canvas.width - 50) + 1) );
        this.y = canvas.height - Math.floor(Math.random() * ((canvas.height - 50) + 1) + 100)/2;
        this.kolizia()
      }
    }
  }
}

class znamkaA extends Znamky{
  constructor() {
    super("znamkaA", 60, 60);
  }
}

class znamkaB extends Znamky{
  constructor() {
    super("znamkaB", 60, 60);
  }
}

class znamkaC extends Znamky{
  constructor() {
    super("znamkaC", 60, 60);
  }
}

class znamkaD extends Znamky {
  constructor() {
    super("znamkaD", 60, 60);
  }
}

class znamkaE extends Znamky{
  constructor() {
    super("znamkaE", 40, 60);
  }
}

class znamkaFX extends Znamky{
  constructor() {
    super("znamkaFX", 60, 60);
  }
}