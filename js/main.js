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
  if(prave_scena === 2 && zapnute == true) {
    plac_hudba.play();
  }
  else if(prave_scena != 2 && zapnute == true) plac_hudba.pause()
  else if(prave_scena != 1 && zapnute == true) klikanie_hudba.pause()
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

window.onload = function() {
  canvas = document.getElementById("canvas")
  ctx = canvas.getContext("2d")
  window.addEventListener("keydown", klavesnica, true);
  canvas.onclick = kliknutie

  function kliknutie(event){
    vstupy[123] = 1;
    var x = event.pageX - canvas.offsetLeft
    var y = event.pageY - canvas.offsetTop
    if(prave_scena === 0){
      sceny[0][2].onclick(x,y);
      sceny[0][3].onclick(x,y) ;
      vstupy[123] = 0;
    }
    else if(prave_scena === 2){
      sceny[2][2].onclick(x,y);
      sceny[2][3].onclick(x,y)
      vstupy[123] = 0;
    }
    else if(prave_scena === 3){
      sceny[3][2].onclick(x,y);
      sceny[3][3].onclick(x,y)
      vstupy[123] = 0;
    }
    else if(prave_scena === 4){
      sceny[4][3].onclick(x,y);
      sceny[4][2].onclick(x,y);
      vstupy[123] = 0;
    }

    var tlacidlo_zrus_hru = sceny[1][11];
    if(x > tlacidlo_zrus_hru.x  && x < tlacidlo_zrus_hru.x + tlacidlo_zrus_hru.velkost 
       && y > tlacidlo_zrus_hru.y && y < tlacidlo_zrus_hru.y + tlacidlo_zrus_hru.velkost){
        prave_scena = 2;
        vstupy[123] = 0
        level_scena.vymaz()
        level_scena.pridaj()
    }

    var menenie_zvuku = sceny[prave_scena][1];
    if(x > menenie_zvuku.x  && x < menenie_zvuku.x + menenie_zvuku.velkost 
       && y > menenie_zvuku.y && y < menenie_zvuku.y + menenie_zvuku.velkost){
          if(zapnute == false){
            document.getElementById("zvuk").src = "../materialy/zvuk/zapnuty zvuk.png";
            bg_hudba.play()
            zapnute = true
          } else {
            document.getElementById("zvuk").src = "../materialy/zvuk/vypnuty zvuk.png";
            bg_hudba.pause()
            plac_hudba.pause()
            zapnute = false
          }
     }
  }

  function klavesnica(event){
    vstupy[event.keyCode] = 1;
  }

  level_scena = new ScenaLevel;
  new ScenaMenu;
  new ScenaPrehra;
  new ScenaVyhra;
  new ScenyPravidla;

  requestAnimationFrame(step)
}