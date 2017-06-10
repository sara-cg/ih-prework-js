var grid = new Array();
var gridSize = 10;



var myRover = {
  position: [0,0], 
  direction: 'N',
  name: 'Curiosity'
};

function goForward(rover) {
  var x = 0;
  var y = 1;
  var oldPosition = rover.position.slice(); //hace una copia de position en vez de apuntar a position
  switch(rover.direction) {
    case 'N':
      rover.position[x]++
      if (!isInGrid(rover)){
        rover.position[x] = 0;
      }
      break;
    case 'E':
      rover.position[y]++
      if (!isInGrid(rover)){
        rover.position[y] = 0;
      }
      break;
    case 'S':
      rover.position[x]--
      if (!isInGrid(rover)){
        rover.position[x] = gridSize - 1;
      }
      break;
    case 'W':
      rover.position[y]--
      if (!isInGrid(rover)){
        rover.position[y] = gridSize - 1;
      }
      break;
  };

  if (hasObstacle(rover.position)){
    rover.position = oldPosition;
    console.log("Obstacle found.");
  }

  logPosition(rover);
}

function goBack(rover) {
  var x = 0;
  var y = 1;
  var oldPosition = rover.position.slice(); //hace una copia de position en vez de apuntar a position
  switch(rover.direction) {
    case 'N':
      rover.position[x]--
      if (!isInGrid(rover)){
        rover.position[x] = gridSize - 1;
      }
      break;
    case 'E':
      rover.position[y]--
      if (!isInGrid(rover)){
        rover.position[y] = gridSize - 1;
      }
      break;
    case 'S':
      rover.position[x]++
      if (!isInGrid(rover)){
        rover.position[x] = 0;
      }
      break;
    case 'W':
      rover.position[y]++
      if (!isInGrid(rover)){
        rover.position[y] = 0;
      }
      break;
  };

  if (hasObstacle(rover.position)){
    rover.position = oldPosition;
    console.log("Obstacle found.");
  }

  logPosition(rover);
}

function turnLeft(rover){
  switch(rover.direction) {
    case 'N':
      rover.direction = 'O';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  };
  logPosition(rover);
}

function turnRight(rover){
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'O';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  };
  logPosition(rover);
}

function logPosition(rover){
  console.log("The rover " + rover.name + " is in position " + rover.position + " and is heading " + rover.direction + ".");
}

function hasObstacle(position){
  var x = position[0];
  var y = position[1];
  return grid[x][y] == 1;
}


function defineGrid(){ //define arrays de tamaño gridSize dentro de un array de tamaño gridSize
  for(x=0; x < gridSize; x++){
    grid[x] = new Array();
    for (y=0; y<gridSize; y++){
      grid[x][y] = 0;
    }
  }
}

function placeObstacle(position){
  var x = position[0];
  var y = position[1];
  grid[x][y] = 1;
}

function isInGrid(rover){ //checkea si rover está dentro del grid
  var x = 0;
  var y = 1;
  return rover.position[x] >= 0 && rover.position[x] < gridSize && rover.position[y] >= 0 && rover.position[y] < gridSize;
}


function executeCommandsOnRover(commands, rover){
  for(i = 0; i < commands.length; i++){
    switch(commands[i]){
      case 'f':
        goForward(rover);
        break;
      case 'b':
        goBack(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
    }
  }
}


defineGrid();
placeObstacle([3,2]);
placeObstacle([5,6]);
placeObstacle([1,8]);
placeObstacle([3,0]);
executeCommandsOnRover("fffffff", myRover);





