var canvas
var ctx

var bg_hudba = new Audio("../zvuky/hlavna_hudba.mp3")
bg_hudba.volume = 0.2
var klikanie_hudba = new Audio("../zvuky/klikanie.mp3")
klikanie_hudba.volume = 0.5
var prehra_hudba = new Audio("../zvuky/game_over.mp3")
var vyhra_hudba = new Audio("../zvuky/vyhra.mp3")
var body_zvuk = new Audio("../zvuky/bod.mp3");
var zapnute = false

var vstupy = new Array(200);
var sceny = new Array();
var prave_scena = 0
var kolko_znamok = 3

for(i = 0; i < 6; i++) sceny.push(new Array());
for(i = 0; i < 200; i++) vstupy[i] = 0;

var last_update = Date.now()
var delta = 0;

var level_scena;
var pocet_levelov = 1;
var priemer = 0.0;
var pocet_zozbieranych_znamok = 0;