var canvas
var ctx
var scene = []

function draw() {
   for (i in scene) {
    scene[i].draw()
  }
}

function step() {
  draw()
  requestAnimationFrame(step)
}

window.onload = function() {
  canvas = document.getElementById("canvas")
  ctx = canvas.getContext("2d")

  scene.push(new pozadie())
  scene.push(new myska())
  scene.push(new zvuk_zap())
  scene.push(new priemer())
  scene.push(new znamky())
  scene.push(new cas())
  scene.push(new level())

  for (i = 0; i < 2; i++) {
       scene.push(new znamkaA())
       scene.push(new znamkaB())
       scene.push(new znamkaC())
       scene.push(new znamkaD())
       scene.push(new znamkaE())
  }
   
  requestAnimationFrame(step)
}