// CompSci 30 Final Major Project
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let startButtonX;
let startButtonY;
let startButtonWidth;
let startButtonHeight;

let startFont;
let menuScreen;
let gameState = "startScreen";

let player = {
  x: 0,
  y: 0,
  size: 50,
};
let speed = 100;
let levelOne = [];
let screen = [];
let cols;
let rows;
let levelSize = 100;
let groundTile;
const TILE_SIZE = 150;
let gridLocationX = -(levelSize/2* TILE_SIZE) ;
let gridLocationY = -(levelSize/2 * TILE_SIZE) ;
let playerLocationX = levelSize/2 ;
let PlayerLocationY = levelSize/2;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = levelSize;
  rows = levelSize;
  levelOne = generateTiles(levelSize,levelSize);

  player.y = height/2;
  player.x = width/2;
  menuScreen = await loadImage("mainScreen.jpg");

  startFont = await loadFont("startFont.ttf");
  
  groundTile = await loadImage("groundTile.png");

}

function draw() {
  background(220);
  startScreen();
}



function movePlayer() {
  if (keyIsDown("s")) {
    if (levelOne[-1 * gridLocationY][-1 * gridLocationX] !== 1) {
      gridLocationY -= speed;

    }
  }
  if (keyIsDown("w")) {
    gridLocationY += speed;
  }
  if (keyIsDown("a")) {
    gridLocationX += speed;
  }
  if (keyIsDown("d")) {
    gridLocationX -= speed;
  }
}

function drawPlayer() {
  fill("red");
  circle(player.x,player.y,player.size);
}

function generateTiles(cols,rows) {
  let array = [];
  for (let y = 0; y < rows; y++) {
    array.push([]);
    for (let x = 0; x < cols; x++) {
      let colour = random(100);
      if (colour < 75) {
        array[y].push(0);
      }
      else {
        array[y].push(1);
      }
    }
  }
  return array;
}

function drawTiles() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (levelOne[y][x] === 1) {
        fill("black");
        square(x * TILE_SIZE + gridLocationX, y * TILE_SIZE + gridLocationY,TILE_SIZE);
      }
      else {
        fill("white");
        image(groundTile,x * TILE_SIZE + gridLocationX, y * TILE_SIZE + gridLocationY,TILE_SIZE,TILE_SIZE);
        text(x,x * TILE_SIZE + gridLocationX, y * TILE_SIZE + gridLocationY);
      }
      
    }
  }
}

//Creates start screen and holds the functions to display start screen
function startScreen() {
  if(gameState === "startScreen") {
    image(menuScreen,0, 0, width, height);
    textFont(startFont);
    fill('#8F1728');
    textSize(95);
    textAlign(CENTER);
    text("PLANET EXPLORER", width/2, 150);

    startButton();
    startText();
  }
  else {
    drawTiles();
    movePlayer();
    drawPlayer();
  }
}

// Cretes the play button for start screen
function startButton() {
  startButtonX = width/2;
  startButtonY = height/2;
  startButtonWidth = 300;
  startButtonHeight = 100;

  rectMode(CENTER);
  fill('#9B5CFF');
  rect(startButtonX,startButtonY , startButtonWidth, startButtonHeight );
}

//Creates text for play Button
function startText() {
  let startTextX = width/2;
  let startTextY = height/2 + 10;

  textureMode(CENTER);
  fill("Black");
  textSize(35);
  text("Press Play", startTextX, startTextY);
}

//Checks collsion with startbutton
function pressPlay() {
  let hit = false;

  hit = collidePointRect(mouseX,mouseY)
}