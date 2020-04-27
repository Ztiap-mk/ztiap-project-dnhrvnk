class pozadia {
    constructor(id) {
      this.id = id;
      this.image = document.getElementById(this.id);
    }
    
    move(){};
    
    draw() {
      ctx.save()
      ctx.drawImage(this.image, 0, 0, canvas.width, canvas.height)
      ctx.restore()
    }
  }

class pozadie_level extends pozadia{
  constructor(){
    super("pozadie-level");
  }
}

class pozadie_menu extends pozadia{
  constructor(){
    super("pozadie-menu");
  }
}

class pozadie_prehra extends pozadia{
  constructor(){
    super("pozadie-prehra")
  }
}

class pozadie_vyhra extends pozadia{
  constructor(){
    super("pozadie-vyhra")
  }
}

class pozadie_pravidla extends pozadia{
  constructor(){
    super("pozadie-pravidla")
  }
}

class pozadie_medzilevel extends pozadia{
  constructor(){
    super("pozadie-medzilevel");
  }
}
