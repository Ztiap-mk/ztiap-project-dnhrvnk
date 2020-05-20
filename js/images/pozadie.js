class pozadia {
    constructor(ktore) {
      this.ktore = ktore;
      this.image = document.getElementById("pozadie");
    }
    
    move(){};
    
    draw() {
      ctx.save()
      ctx.drawImage(this.image, 1920*this.ktore, 0, 1920, 1080, 0, 0, canvas.width, canvas.height);
      ctx.restore()
    }
  }

class pozadie_level extends pozadia{
  constructor(){
    super(1);
  }
}

class pozadie_menu extends pozadia{
  constructor(){
    super(0);
  }
}

class pozadie_prehra extends pozadia{
  constructor(){
    super(2)
  }
}

class pozadie_vyhra extends pozadia{
  constructor(){
    super(3)
  }
}

class pozadie_pravidla extends pozadia{
  constructor(){
    super(4)
  }
}

class pozadie_medzilevel extends pozadia{
  constructor(){
    super(5);
  }
}
