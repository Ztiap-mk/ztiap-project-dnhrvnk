class text {
    constructor(x, y, velkost_fontu, farba, text) {
        this.x = x;
        this.y = y;
        this.velkost = velkost_fontu;
        this.farba = farba;
        this.text = text;
    }
      move() {}
    
      draw() {
        ctx.save()
        ctx.font = this.velkost + "px 'Freckle Face'";
        ctx.fillStyle = this.farba;
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore()
      }
}

//texty v leveli
class text_priemer extends text{
    constructor(){
        super(10, 50, "45", "black", "Priemer: ");
    }
}

class pocitadlo_priemeru extends text{
    constructor(){
        super(190, 50, "45", "black", ''+priemer);
    }
    vypocet_priemeru(zozbierana_znamka){
        pocet_znamok++;                                         //počet všekých pozbieraných známok++
        var id_znamky = zozbierana_znamka.ktore_y;          //pre zozbieranú známku sa zistí, že ktorá to bola
        if(id_znamky == 0){                             //a podľa toho sa zistí jej hodnota a zmení farba myšky
            var hodnota_znamky = 1.0;
            sceny[1][2].farba_mysky = 1;
        }
        if(id_znamky == 1){
            var hodnota_znamky = 1.5;
            sceny[1][2].farba_mysky = 4;
        }
        if(id_znamky == 2){
            var hodnota_znamky = 2.0;
            sceny[1][2].farba_mysky = 3;
        }
        if(id_znamky == 3){
            var hodnota_znamky = 2.5;
            sceny[1][2].farba_mysky = 0;
        }
        if(id_znamky == 4){
            var hodnota_znamky = 3.0;
            sceny[1][2].farba_mysky = 2;
        }

        sucet_znamok += hodnota_znamky;            //celkový súčet všetkých zozbieraných známok - pripočítavajú sa tam zadané hodnoty známky
        priemer = sucet_znamok / pocet_znamok;     //výpočet priemeru
        
        priemer = Math.round(priemer * 100) / 100   
        this.text = '' + priemer;                    //výpis priemeru
        sceny[2][7].zmena_textu(priemer);           //zmena textu v prehre a výhre
        sceny[3][6].zmena_textu(priemer);
    }
}

class znamky extends text{
    constructor() {
        super(10, 100, "45", "black", "Známky: ");
    }
}

class pocitadlo_znamok extends text {
    constructor() {
        zmena_casu_a_poctu_znamok_levela();
        super(190, 100, "45", "black", '' + pocet_zozbieranych_znamok+"/"+pozadovane_znamky);
        this.kolko_znamok = pozadovane_znamky;
    }
    zmena_textu(){
        pocet_zozbieranych_znamok++;
        this.text = '' + pocet_zozbieranych_znamok + "/" + this.kolko_znamok;

        if(pocet_zozbieranych_znamok == this.kolko_znamok){     //ak sa pozbieralo požadovaný počet známok
            pocet_levelov++;                    
            zmena_levelu();                     //vygeneruje sa nový level
            prave_scena = 5;                    //spustí sa medzilevel scéna
            sceny[5][2].zmena_textu();          //zmena textu v medzileveli
            sceny[5][3].zmena_textu();
            vyhra_alebo_pregra();
        }
    }
}

class cas extends text{
    constructor() {
        super(canvas.width - 200, 50, "45", "black", "Čas: ");
    }
}

class casovac extends text{
    constructor() {
        zmena_casu_a_poctu_znamok_levela();
        super(canvas.width - 100, 50, "45", "black", '' + sekundy);
        this.sekundy = sekundy;
        this.cas = 0;
    }
    move(delta){
        this.cas += delta;
        if(this.cas >= 1){
            this.sekundy--;                    //odpočítavanie 1 sekundy
            this.text = '' + this.sekundy; 
            this.cas = 0;
        }
        if(this.sekundy <= 5) this.farba = "red";

        if(this.sekundy == 0) {                //ak som už na 0 sekundách                      
            this.sekundy = sekundy;            //späť na 30 sekund
            this.cas = 0;       
            zrusenie_levelu();
            prave_scena = 2;   
        }
    }
    bonus(){
        this.sekundy += 7;
    }
}

class level extends text{
    constructor() {
        super(canvas.width - 200, 90, "45", "black", "Level: ");
    }
}

class cislo_levelu extends text{
    constructor() {
        super(canvas.width - 75, 90, "45", "black", pocet_levelov + '')
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

class skore_prehra extends text{
    constructor() {
        super(55, 240, "50", "black", "Tvoje skóre bolo: "+ priemer)
    }
    zmena_textu(score){
        this.text = "Tvoje skóre bolo: "+ score;
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

class skore_vyhra extends text{
    constructor() {
        super(55, 240, "50", "black", "Tvoje skóre bolo: "+ priemer);
    }
    zmena_textu(score){
        this.text = "Tvoje skóre bolo: "+ priemer;
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
        super(50, 350, "25", "black", "Tvoj celkový priemer musí byť pod 2.2, tak hor sa do učenia!");
    }
}

//texty v medzileveli
class medzilevel extends text{
    constructor() {
        super(100, 250, "150", "black", "Level " + pocet_levelov);
        this.cas = 0;
    }

    move(delta){
        this.cas += delta;
        if(this.cas >= 1.5){      //medzilevel trvá 1.5 sekundy
            this.cas = 0;   
            prave_scena = 1;      //potom sa znova spustí level
        }
    }
    zmena_textu(){
        this.text = "Level " + pocet_levelov;
    }
}

class medzilevel_tien extends text{
    constructor() {
        super(95, 250, "150", "#598176", "Level " + pocet_levelov);
    }
    zmena_textu(){
        this.text = "Level " + pocet_levelov;
    }
}