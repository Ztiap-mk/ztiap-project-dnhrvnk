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
  requestAnimationFrame(step)
}

window.onload = function() {
  canvas = document.getElementById("canvas")
  ctx = canvas.getContext("2d")
  window.addEventListener("keydown", klavesnica, true);
  canvas.onclick = kliknutie

  function kliknutie(event){
    vstupy[123] = 1;
    nechod_dole = 0;
    var x = event.pageX - canvas.offsetLeft
    var y = event.pageY - canvas.offsetTop
    if(prave_scena === 0){
      sceny[0][2].onclick(x,y);
      sceny[0][3].onclick(x,y) ;
      vstupy[123] = 0;
      koniec_hry = false; 
    }
    else if(prave_scena === 2){
      sceny[2][2].onclick(x,y);
      sceny[2][3].onclick(x,y)
      vstupy[123] = 0;
      koniec_hry = false; 
    }
    else if(prave_scena === 3){
      sceny[3][2].onclick(x,y);
      sceny[3][3].onclick(x,y)
      vstupy[123] = 0;
      koniec_hry = false; 
    } 
    else if(prave_scena === 4){
      sceny[4][3].onclick(x,y);
      sceny[4][2].onclick(x,y);
      vstupy[123] = 0;
      koniec_hry = false; 
    }

    var tlacidlo_zrus_hru = sceny[1][11];
    if(x > tlacidlo_zrus_hru.x  && x < tlacidlo_zrus_hru.x + tlacidlo_zrus_hru.velkost 
       && y > tlacidlo_zrus_hru.y && y < tlacidlo_zrus_hru.y + tlacidlo_zrus_hru.velkost){
        prave_scena = 2;   
       zrusenie_levelu()
       koniec_hry = false; 
    }

    var menenie_zvuku = sceny[prave_scena][1];
    if(x > menenie_zvuku.x  && x < menenie_zvuku.x + menenie_zvuku.velkost 
    && y > menenie_zvuku.y && y < menenie_zvuku.y + menenie_zvuku.velkost){
          if(zapnute == false){
            ktory_obrazok_zvuku = 1;
            bg_hudba.play()
            zapnute = true
          } else {
            ktory_obrazok_zvuku = 0;            
            bg_hudba.pause()
            klikanie_hudba.pause()
            prehra_hudba.pause()
            vyhra_hudba.pause()
            body_zvuk.pause()
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
  new ScenyMedzilevel;

  requestAnimationFrame(step)
}