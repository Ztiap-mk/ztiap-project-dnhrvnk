class text {
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
class priemer extends text{
    constructor(){
        super(10, 40, "30", "black", "Priemer: ");
    }
}

class pocitadlo_priemeru extends text{
    constructor(){
        super(130, 40, "30", "black", "0.0");
    }
}

class znamky extends text{
    constructor() {
        super(10, 80, "30", "black", "Známky: ");
    }
}

class pocitadlo_znamok extends text {
    constructor() {
        var pocet = 0;
        super(130, 80, "30", "black", pocet+"/10")
        this.pocet = pocet;
    }
    zmena_textu(){
        this.pocet++;
        this.text = this.pocet + "/10";
    }
}

class cas extends text{
    constructor() {
        super(canvas.width - 170, 40, "30", "black", "Čas: ");
    }
}

class casovac extends text{
    constructor() {
        var sekundy = 30;
        super(canvas.width - 100, 40, "30", "black", ''+sekundy);
        this.sekundy = sekundy;
        this.cas = 0;
    }
    move(delta){
        this.cas += delta;
        if(this.cas >= 1){
            this.sekundy--;
            this.text = '' + this.sekundy; 
            this.cas = 0;
        }
        if(this.sekundy == 0) {
            prave_scena = 2;
            this.sekundy = 30;
            this.cas = 0;
            level_scena.vymaz();
            level_scena.pridaj()
        }
    }
}

class level extends text{
    constructor() {
        super(canvas.width - 170, 80, "30", "black", "Level: ");
    }
}

class cislo_levelu extends text{
    constructor() {
        super(canvas.width - 85, 80, "30", "black", "1")
    }
}


//texty v menu
class nazov_hry extends text{
    constructor() {
        super(55, 120, "100", "#598176", "Survive FIIT");
    }
}

class nazov_hry_tien extends text{
    constructor() {
        super(50, 120, "100", "black", "Survive FIIT");
    }
}

class hraj extends text{
    constructor() {
        super(150, 270, "70", "black", "HRAJ");
    }
}

class pravidla extends text{
    constructor() {
        super(100, 390, "60", "black", "PRAVIDLÁ");
    }
}

//texty v prehre
class prehral extends text{
    constructor() {
        super(55, 120, "100", "black", "Prehral si!");
    }
}

class o_rok extends text{
    constructor() {
        super(55, 190, "50", "black", "Skús znova o rok!");
    }
}

class skore extends text{
    constructor() {
        super(55, 240, "50", "black", "Tvoje skóre bolo:");
    }
}

class znova extends text{
    constructor() {
        super(95, 330, "45", "black", "HRAJ ZNOVU");
    }
}

class ukonci extends text{
    constructor() {
        super(95, 450, "45", "black", "UKONČIŤ HRU");
    }
}

//texty vo vyhre
class vyhral extends text{
    constructor() {
        super(55, 120, "100", "black", "Vyhral si!");
    }
}

class semester extends text{
    constructor() {
        super(55, 190, "50", "black", "Hurá do nového semestra!");
    }
}      

//texty v pravidlach
class pravidla_p extends text{
    constructor() {
        super(320, 80, "80", "black", "PRAVIDLÁ");
    }
}   

class hraj_p extends text{
    constructor() {
        super(200, 520, "80", "black", "HRAJ");
    }
}   

class menu extends text{
    constructor() {
        super(580, 520, "80", "black", "MENU");
    }
}

class prva_veta extends text{
    constructor() {
        super(50, 150, "25", "black", "Zozbieraj najlepšie známky za semester a získaj tak najlepší priemer.");
    }
}

class druha_vety extends text{
    constructor() {
        super(50, 200, "25", "black", "Známky zozbieraš kliknutím myši na hraciu plochu alebo medzerníkom na klávesnici.");
    }
}

class tretia_vety extends text{
    constructor() {
        super(50, 250, "25", "black", "POZOR! Nechytaj známku FX, hneď prehráš!");
    }
}

class stvrta_veta extends text{
    constructor() {
        super(50, 300, "25", "black", "Nezabudni zozbierať požadovaný počet známok za level za daný časovy limit.");
    }
}

class piata_veta extends text{
    constructor() {
        super(50, 350, "25", "black", "Tvoj celkový priemer musí byť pod 2.0, tak hor sa do učenia!");
    }
}