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


function drawWorld() {

	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;
	for(var eachRow=0;eachRow<WORLD_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<WORLD_COLS;eachCol++) {

			var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
			var tileKindHere = worldGrid[arrayIndex];
			var useImg = worldPics[tileKindHere];

			if( tileTypeHasTransparency(tileKindHere) ) {
				canvasContext.drawImage(worldPics[TILE_GROUND],drawTileX,drawTileY);
			}
			canvasContext.drawImage(useImg,drawTileX,drawTileY);
			drawTileX += WORLD_W;
			arrayIndex++;
		} // end of for each col
		drawTileY += WORLD_H;
		drawTileX = 0;
	} // end of for each row

} // end of drawWorld func
