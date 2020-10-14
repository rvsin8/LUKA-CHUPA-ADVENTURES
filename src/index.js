import Corgi from "./scripts/corgi";


var canvas, canvasContext;

var lukaCorgi = new Corgi();
window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  //colorRect(0, 0, canvas.width, canvas.height, "black");
  //colorText("LOADING IMAGES", canvas.width / 2, canvas.height / 2, "white")
  //loadImages();
};

function imageLoadingDoneSoStartGame() {
  var framesPerSecond = 30;
  setInterval(updateAll, 1000 / framesPerSecond);

  setupInput();

  loadLevel(levelOne);
}

function loadLevel(whichLevel) {
  worldGrid = whichLevel.slice();

}

function updateAll() {
  moveAll();
  drawAll();
}

function moveAll() {
  lukaCorgi.move();
}

function drawAll() {
  drawWorld();
  lukaCorgi.draw();
}
