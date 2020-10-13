//incase you want multiplayer? 

const KEY_LEFT_ARROW = 37; //https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

const KEY_W = 87; //https://stackoverflow.com/questions/38807007/a-canvas-multiplayer-game-i-cannot-press-more-than-4-buttons
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

function setupInput() {

  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);

  lukaCorgi.setupInput(
    KEY_UP_ARROW,
    KEY_RIGHT_ARROW,
    KEY_DOWN_ARROW,
    KEY_LEFT_ARROW
  );
}


function keySet(keyEvent, setTo) { //give each key functionality in the direction they should go
  if (keyEvent.keyCode == lukaCorgi.controlKeyLeft) { //left is west
    lukaCorgi.keyHeld_West = setTo;
  }
  if (keyEvent.keyCode == lukaCorgi.controlKeyRight) { //right is east
    lukaCorgi.keyHeld_East = setTo;
  }
  if (keyEvent.keyCode == lukaCorgi.controlKeyUp) { //up is north
    lukaCorgi.keyHeld_North = setTo;
  }
  if (keyEvent.keyCode == lukaCorgi.controlKeyDown) { //down is south
    lukaCorgi.keyHeld_South = setTo;
  }
}

function keyPressed(event) { //for movement
  // console.log("Key pressed: "+event.keyCode);
  keySet(event, true);

  event.preventDefault();
}

function keyReleased(event) { //to stop moving
  // console.log("Key pressed: "+event.keyCode);
  keySet(event, false);
}
