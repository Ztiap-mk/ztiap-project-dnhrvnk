class Znamky{
  constructor(znamka, x2, y2) {
    this.image = document.getElementById(znamka)
    this.x = Math.floor(Math.random() * ((canvas.width - 200) - 100 + 1) + 150);
    this.y = canvas.height - Math.floor(Math.random() * ((canvas.height - 100) - 100 + 1) + 150)/2;
    this.x2 = x2;
    this.y2 = y2;
    this.physical = true;
  }
  
  move(){};

  draw() {
    ctx.save()
    ctx.drawImage(this.image,  this.x, this.y, this.x2, this.y2)
    ctx.restore()
  }

  kolizia(){
    for(i = 8; i < sceny[1].length; i++){
      var obj = sceny[1][i];
      if(obj == this || !obj.physical) continue;
      var test = this.x >= obj.x + obj.x2 || this.x + this.x2 <= obj.x ||
                  this.y >= obj.y + obj.y2 || this.y + this.y2 <= obj.y;
      if(!test){
        console.log("tu som")
        this.x = Math.floor(Math.random() * ((canvas.width - 200) - 100 + 1) + 150);
        this.y = canvas.height - Math.floor(Math.random() * ((canvas.height - 100) - 100 + 1) + 150)/2;
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