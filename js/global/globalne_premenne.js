var canvas
var ctx

//zvuky
var bg_hudba = new Audio("../zvuky/hlavna_hudba.mp3")
bg_hudba.volume = 0.2
var klikanie_hudba = new Audio("../zvuky/klikanie.mp3")
klikanie_hudba.volume = 0.5
var prehra_hudba = new Audio("../zvuky/game_over.mp3")
var vyhra_hudba = new Audio("../zvuky/vyhra.mp3")
var body_zvuk = new Audio("../zvuky/bod.mp3");
var zapnute = false;
var ktory_obrazok_zvuku = 0;

var vstupy = new Array(200);                        //pole na vstupy z klávesnice a myši
for(i = 0; i < 200; i++) vstupy[i] = 0;  
var sceny = new Array();                            //dvojrozmerné pole na scény
for(i = 0; i < 6; i++) sceny.push(new Array());
var prave_scena = 0                                 //ktorá scéna sa má práve vykresliť
var kolko_znamok = 3                                //koľko známok sa má na plochu vykresliť
     
        
var last_update = Date.now()
var delta = 0;

var level_scena;
var pocet_levelov = 1;
var pocet_zozbieranych_znamok = 0;

//premenné na výpočet priemeru počas všetkých levelov
var priemer = 0.0;  
var pocet_znamok = 0;
var sucet_znamok = 0;

var nechod_dole = 1;
var sekundy = 30;
var pozadovane_znamky = 6;
var koniec_hry = false;