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
  size: 10,
};
let speed = 1;
let tiles = [];
let cols;
let rows;
const TILE_SIZE = 50;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.ceil(width/TILE_SIZE);
  rows = Math.ceil(height/TILE_SIZE);
  tiles = generateTiles(cols,rows);

  player.y = rows*TILE_SIZE/2;
  player.x = cols*TILE_SIZE/2;
  menuScreen = await loadImage("mainScreen.jpg");

  startFont = await loadFont("startFont.ttf");
  
}

function draw() {
  background(220);
  startScreen();
}


function keyPressed() {
  if (key === "s" || key === "S") {
    let movedTiles = tiles;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        movedTiles[y][x] = tiles[y+1][x];
      }
    }
    tiles = movedTiles;
  }
}
function movePlayer() {
  if (keyPressed("w") || keyPressed("W")) {
    let movedTiles = tiles;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        movedTiles[y][x] = tiles[y+1][x];
      }
    }
    tiles = movedTiles;
  }
  if (keyIsDown("a") || keyIsDown("A")) {
    player.x -= speed;
  }
  if (keyIsDown("s") || keyIsDown("S")) {
    player.y += speed;
  }
  if (keyIsDown("d") || keyIsDown("D")) {
    player.x += speed;
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
      if (tiles[y][x] === 1) {
        fill("black");
      }
      else {
        fill("white");
      }
      square(x * TILE_SIZE, y * TILE_SIZE,TILE_SIZE);
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
    drawPlayer();
    movePlayer();
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