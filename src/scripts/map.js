const MAP_W = 50; //try this out, refractor once it appears on canvas
const MAP_H = 50; 
const MAP_GAP = 2;
const MAP_COLS = 16;
const MAP_ROWS = 12;
var levelOne =  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 1, 1, 1, 1,
				 1, 0, 4, 0, 4, 0, 1, 0, 2, 0, 1, 0, 1, 4, 4, 1,
				 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 1, 5, 1, 1,
				 1, 1, 1, 5, 1, 1, 1, 0, 4, 0, 1, 0, 0, 0, 1, 1,
				 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 1, 1,
				 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1,
				 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 4, 0, 1, 1,
				 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1,
				 1, 0, 5, 0, 5, 0, 5, 0, 3, 0, 1, 1, 1, 1, 1, 1,
				 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1,
				 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; //figure out how to change this map for different levels - make it harder
var mapGrid = [];

const TILE_GROUND = 0; //movement allowed
const TILE_WALL = 1; //filled space
const TILE_PLAYERSTART = 2; //where luka starts
const TILE_CHUPA = 3; //where chupa is
const TILE_SNACKS = 4; //need to collect these to get to chupa
const TILE_DOOR = 5; //need certain snacks to open certain doors

function returnTileTypeAtColRow(col, row) { //logic for multi grid that will help create my map
	if(col >= 0 && col < MAP_COLS && //colum
		row >= 0 && row < MAP_ROWS) { //row
		 var mapIndexUnderCoord = rowColToArrayIndex(col, row); 
		 return mapGrid[mapIndexUnderCoord]; //return our grid regarding what tiles is what
	} else {
		return MAP_WALL; //return wall
	}
}

function rowColToArrayIndex(col, row) { 
	return col + MAP_COLS * row; //x before y, col before row - compute index
}

function tileTypeHasTransparency(checkTileType) { //things we need transparent !!, need to figure this out
	return (checkTileType == TILE_CHUPA ||
			checkTileType == TILE_SNACKS ||
			checkTileType == TILE_DOOR);
}

