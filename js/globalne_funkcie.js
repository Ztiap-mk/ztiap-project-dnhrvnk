function draw() {
    sceny[prave_scena].forEach(element =>{
      element.move(delta);
      element.draw();
    });
  }
  
  function step() {
    draw()
    zmena_zvukov()
    delta_time()
    vyhra_alebo_pregra();
    requestAnimationFrame(step)
  }
  
  function delta_time(){
    var teraz = Date.now();
    delta = (teraz - last_update)/1000;
    last_update = teraz;
  }
  
  function zmena_zvukov(){
    if(prave_scena === 2 && zapnute) prehra_hudba.play();
    if(prave_scena != 2 && zapnute) prehra_hudba.pause()
    if(prave_scena != 1 && zapnute ) klikanie_hudba.pause()
    if(prave_scena === 3 && zapnute) vyhra_hudba.play();
    if(prave_scena != 3 && zapnute) vyhra_hudba.pause();
  }
  
  function aky_je_smer(x,y, matica){
    var Fx = matica.m11*x-matica.m12*y+matica.m41;
    var Fy = -matica.m21*x+ matica.m22*y+matica.m42;
    return {Fx,Fy};
  }
  
  function vyhra_alebo_pregra() {
    if(pocet_levelov == 4){
      if(priemer < 2.0) prave_scena = 3;
      else prave_scena = 2;
    }
  }
  
  function zmena_levelu(){
    pocet_zozbieranych_znamok = 0;
    level_scena.vymaz()
    level_scena.pridaj()
  }