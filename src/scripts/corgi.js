const PLAYER_MOVE_SPEED = 5.0; //test this for perfect speed

class Corgi {
  constructor (){
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

  }


  setupInput (upKey, rightKey, downKey, leftKey) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
  };

  reset (corgiName) {
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

  	updateSnackReadout () { // lets us know how many snacks are
      document.getElementById("debugText").innerHTML = "Keys: " + this.keysHeld;
    };



  move () { //*test this as well - consistent speed is key with snack
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

  game() {
  var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
	var walkIntoTileType = TILE_WALL;

		if(walkIntoTileIndex != undefined) {
			walkIntoTileType = worldGrid[walkIntoTileIndex];
		}

		switch (walkIntoTileType) {
      case TILE_GROUND: //advance once its a reg tile
        this.x = nextX;
        this.y = nextY;
        break;
      case TILE_CHUPA: // win once you hit chupa
        console.log(this.name + " WINS!");
        loadLevel(levelOne);
        break;
      case TILE_DOOR: //if you have enough snacks break the door down
        if (this.keysHeld > 0) {
          this.keysHeld--; // one less snack
          this.updateSnackReadout(); //how mna
          worldGrid[walkIntoTileIndex] = TILE_GROUND;
        }
        break;
      case TILE_SNACKS:
        this.keysHeld++; // one more snack, remove the snack and put ground there
        this.updateSnackReadout();
        worldGrid[walkIntoTileIndex] = TILE_GROUND;
        break;
      case TILE_WALL:
      default:
        break;
    }
  }
}

export default Corgi

