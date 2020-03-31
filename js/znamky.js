class Znamky{
  constructor(znamka, x2, y2) {
    this.image = document.getElementById(znamka)
    this.x = Math.floor(Math.random() * ((canvas.width - 100) -100 + 1) + 100);
    this.y = canvas.height - Math.floor(Math.random() * ((canvas.height - 100) - 100 + 1) + 100)/2;
    this.x2 = x2;
    this.y2 = y2;
  }
  
  move(){};

  draw() {
    ctx.save()
    ctx.drawImage(this.image,  this.x, this.y, this.x2, this.y2)
    ctx.restore()
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