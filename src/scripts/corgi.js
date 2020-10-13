const PLAYER_MOVE_SPEED = 5.0; //test this for perfect speed

function corgiClass() {
  this.x = 75;
  this.y = 75;
  this.name = "LUKA";
  this.keysHeld = 0;

  this.keyHeld_North = false; //we don't want to wait on an instance where its true - complicates things
  this.keyHeld_South = false;
  this.keyHeld_West = false;
  this.keyHeld_East = false;

  this.controlKeyUp;
  this.controlKeyRight;
  this.controlKeyDown;
  this.controlKeyLeft;

  this.setupInput = function (upKey, rightKey, downKey, leftKey) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
  };

  this.reset = function (corgiName) {
    this.name = corgiName;
    this.keysHeld = 0;
    this.updateKeyReadout();

    for (var eachRow = 0; eachRow < MAP_ROWS; eachRow++) { //*logic for where luka should start, check this
      for (var eachCol = 0; eachCol < MAP_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow); //
        if (mapGrid[arrayIndex] == TILE_PLAYERSTART) {
          mapGrid[arrayIndex] = TILE_GROUND;
          this.x = eachCol * MAP_W;
          this.y = eachRow * MAP_H;
          return;
        } // end of player start if
      } // end of col for
    } // end of row for
    console.log("NO PLAYER START FOUND!");
  }; // end of corgiReset func


  this.move = function () { //*test this as well - consistent speed is key
    var nextX = this.x;
    var nextY = this.y;

    if (this.keyHeld_North) {
      nextY -= PLAYER_MOVE_SPEED;
    }
    if (this.keyHeld_East) {
      nextX += PLAYER_MOVE_SPEED;
    }
    if (this.keyHeld_South) {
      nextY += PLAYER_MOVE_SPEED;
    }
    if (this.keyHeld_West) {
      nextX -= PLAYER_MOVE_SPEED;
    }
  }
}