var canvas
var ctx

var bg_hudba = new Audio("../zvuky/hlavna_hudba.mp3")
bg_hudba.volume = 0.3
var klikanie_hudba = new Audio("../zvuky/klikanie.mp3")
var plac_hudba = new Audio("../zvuky/game_over.mp3")

var vstupy = new Array(200);
var sceny = new Array();
var prave_scena = 0
var kolko_znamok = 3

for(i = 0; i < 5; i++) sceny.push(new Array());
for(i = 0; i < 200; i++) vstupy[i] = 0;

last_update = Date.now()
delta = 0;