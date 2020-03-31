var canvas
var ctx
var scene = []
var vstupy = new Array(200);
var sceny = new Array();
var prave_scena = 0;

for(i = 0; i < 5; i++) sceny.push(new Array());
for(i = 0; i < 200; i++) vstupy[i] = 0;

function draw() {
  sceny[prave_scena].forEach(element =>{
    console.log(element);
    element.move();
    element.draw();
  });
}

function step() {
  draw()
  requestAnimationFrame(step)
}

window.onload = function() {
  canvas = document.getElementById("canvas")
  ctx = canvas.getContext("2d")
  window.addEventListener("keydown", klavesnica, true);
  canvas.onclick = kliknutie

  function kliknutie(event){
    vstupy[123] = 1;
  }

  function klavesnica(event){
    vstupy[event.keyCode] = 1;
  }

  //scena - menu
  sceny[0].push(new pozadie_menu())
  sceny[0].push(new tlacidlo1_menu())
  sceny[0].push(new tlacidlo2_menu())
  sceny[0].push(new nazov_hry())
  sceny[0].push(new nazov_hry_tien())
  sceny[0].push(new hraj())
  sceny[0].push(new pravidla())
  sceny[0].push(new zvuk_zap())

  //scena - level
  sceny[1].push(new pozadie_level())
  sceny[1].push(new myska())
  sceny[1].push(new zvuk_zap())
  sceny[1].push(new priemer())
  sceny[1].push(new znamky())
  sceny[1].push(new cas())
  sceny[1].push(new level())
  for (i = 0; i < 2; i++) {
       sceny[1].push(new znamkaA())
       sceny[1].push(new znamkaB())
       sceny[1].push(new znamkaC())
       sceny[1].push(new znamkaD())
       sceny[1].push(new znamkaE())
  }

  //scena - prehra
  sceny[2].push(new pozadie_prehra())
  sceny[2].push(new zvuk_zap())
  sceny[2].push(new tlacidlo1_prehra())
  sceny[2].push(new tlacidlo2_prehra())
  sceny[2].push(new prehral())
  sceny[2].push(new o_rok())
  sceny[2].push(new znova())
  sceny[2].push(new skore())
  sceny[2].push(new ukonci())

  //scena - vyhra
  sceny[3].push(new pozadie_vyhra())
  sceny[3].push(new zvuk_zap())
  sceny[3].push(new tlacidlo1_prehra())
  sceny[3].push(new tlacidlo2_prehra())
  sceny[3].push(new znova())
  sceny[3].push(new ukonci())
  sceny[3].push(new skore())
  sceny[3].push(new vyhral())
  sceny[3].push(new semester())

  requestAnimationFrame(step)
}