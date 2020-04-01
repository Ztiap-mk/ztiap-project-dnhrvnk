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

//texty v pravidlach
class pravidla_p extends texty_menu{
    constructor() {
        super(320, 80, "80", "black", "PRAVIDLÁ");
    }
}   

class hraj_p extends texty_menu{
    constructor() {
        super(200, 520, "80", "black", "HRAJ");
    }
}   

class menu extends texty_menu{
    constructor() {
        super(580, 520, "80", "black", "MENU");
    }
}

class prva_veta extends texty_menu{
    constructor() {
        super(50, 150, "25", "black", "Zozbieraj najlepšie známky za semester a získaj tak najlepší priemer.");
    }
}

class druha_vety extends texty_menu{
    constructor() {
        super(50, 200, "25", "black", "Známky zozbieraš kliknutím myši na hraciu plochu alebo medzerníkom na klávesnici.");
    }
}

class tretia_vety extends texty_menu{
    constructor() {
        super(50, 250, "25", "black", "POZOR! Nechytaj známku FX, hneď prehráš!");
    }
}

class stvrta_veta extends texty_menu{
    constructor() {
        super(50, 300, "25", "black", "Nezabudni zozbierať požadovaný počet známok za level za daný časovy limit.");
    }
}

class piata_veta extends texty_menu{
    constructor() {
        super(50, 350, "25", "black", "Tvoj celkový priemer musí byť nad 2.0, tak hor sa do učenia!");
    }
}