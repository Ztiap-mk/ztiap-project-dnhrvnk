class texty_menu {
    constructor(x, y, velkost_fontu, farba, text) {
        this.x = x;
        this.y = y;
        this.font = velkost_fontu;
        this.farba = farba;
        this.text = text;
    }
      move() {}
    
      draw() {
        ctx.save()
        ctx.font = this.font + "px 'Freckle Face'";
        ctx.fillStyle = this.farba;
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore()
      }
}

//texty v leveli
class priemer extends texty_menu{
    constructor(){
        super(10, 40, "30", "black", "Priemer: ");
    }
}

class znamky extends texty_menu{
    constructor() {
        super(10, 80, "30", "black", "Známky: ");
    }
}

class cas extends texty_menu{
    constructor() {
        super(canvas.width - 200, 40, "30", "black", "Čas: ");
    }
}

class level extends texty_menu{
    constructor() {
        super(canvas.width - 200, 80, "30", "black", "Level: ");
    }
}


//texty v menu
class nazov_hry extends texty_menu{
    constructor() {
        super(55, 120, "100", "#598176", "Survive FIIT");
    }
}

class nazov_hry_tien extends texty_menu{
    constructor() {
        super(50, 120, "100", "black", "Survive FIIT");
    }
}

class hraj extends texty_menu{
    constructor() {
        super(150, 270, "70", "black", "HRAJ");
    }
}

class pravidla extends texty_menu{
    constructor() {
        super(100, 390, "60", "black", "PRAVIDLÁ");
    }
}

//texty v prehre
class prehral extends texty_menu{
    constructor() {
        super(55, 120, "100", "black", "Prehral si!");
    }
}

class o_rok extends texty_menu{
    constructor() {
        super(55, 190, "50", "black", "Skús znova o rok!");
    }
}

class skore extends texty_menu{
    constructor() {
        super(55, 240, "50", "black", "Tvoje skóre bolo:");
    }
}

class znova extends texty_menu{
    constructor() {
        super(95, 330, "45", "black", "HRAJ ZNOVU");
    }
}

class ukonci extends texty_menu{
    constructor() {
        super(95, 450, "45", "black", "UKONČIŤ HRU");
    }
}

//texty vo vyhre
class vyhral extends texty_menu{
    constructor() {
        super(55, 120, "100", "black", "Vyhral si!");
    }
}

class semester extends texty_menu{
    constructor() {
        super(55, 190, "50", "black", "Hurá do nového semestra!");
    }
}      