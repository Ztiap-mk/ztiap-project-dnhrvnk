class obrazky {
    constructor(id, x, y, velkost) {
      this.image = document.getElementById(id)
      this.x = x;
      this.y = y;
      this.velkost = velkost;
    }
    
    move(){};

    draw() {
      ctx.save()
      ctx.drawImage(this.image,  this.x, this.y, this.velkost, this.velkost)
      ctx.restore()
    }
  }

class zvuk_zap extends obrazky {
  constructor() {
    super("zvuk", 10, canvas.height - 60, 50);
  }
  draw(){
    ctx.save()
    ctx.drawImage(this.image, 820*ktory_obrazok_zvuku, 0, 820, 820, this.x, this.y, this.velkost, this.velkost);
    ctx.restore()
  }
}

class krizik extends obrazky {
  constructor() {
    super("krizik", canvas.width - 30, 10, 20);
  }
}