function delta_time(){
    var teraz = Date.now();
    delta = (teraz - last_update)/1000;
    last_update = teraz;
}
  
function zmena_zvukov(){
    if(prave_scena === 2 && zapnute) prehra_hudba.play();
    if(prave_scena != 2 && zapnute) prehra_hudba.pause();
    if(prave_scena != 1 && zapnute ) klikanie_hudba.pause();
    if(prave_scena === 3 && zapnute) vyhra_hudba.play();
    if(prave_scena != 3 && zapnute) vyhra_hudba.pause();
}
  
function aky_je_smer(x,y, matica){                    //zistujeme rotačnú maticu
    var Fx = matica.m11*x-matica.m12*y+matica.m41;
    var Fy = -matica.m21*x+ matica.m22*y+matica.m42;
    return {Fx,Fy};   //vracia smerový vektor
}
  
function vyhra_alebo_pregra() {
    if(pocet_levelov == 4){                 //pozrie sa či sme už hrali 3 leveli
      if(priemer < 2.2) prave_scena = 3;    //a zsití sa či sa má ukázať výhra/prehra
      else prave_scena = 2;
      zrusenie_levelu()           
      koniec_hry = true; 
    }
}
  
function zmena_levelu(){
    pocet_zozbieranych_znamok = 0;
    level_scena.vymaz();
    level_scena.pridaj();
    vstupy[32] = 0;
    vstupy[123] = 0;
}

function zrusenie_levelu(){     
    pocet_levelov = 1;                 //vrátenie všetkého na začiatok
    priemer = 0.0;
    pocet_znamok = 0;
    sucet_znamok = 0;
    zmena_levelu();                    //vygenerovanie nového levelu
}

function zmena_casu_a_poctu_znamok_levela(){
    if(pocet_levelov == 1){
      sekundy = 30;
      pozadovane_znamky = 7;
    }
    else if(pocet_levelov == 2){
      sekundy = 25;
      pozadovane_znamky = 6;
    }
    else{
      sekundy = 20;
      pozadovane_znamky = 5;
    }
}