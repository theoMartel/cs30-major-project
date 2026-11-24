// CompSci 30 Final Major Project
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let menuScreen;
let gameState = "startScreen";

async function setup() {
  createCanvas(windowWidth, windowHeight);
  menuScreen = await loadImage("mainScreen.jpg");
}

function draw() {
  background(220);
  movePlayer();
  startScreen();
}



function movePlayer() {
  if (keyIsDown("w") || keyIsDown("W")) {
    console.log("forward");
  }
}

function startScreen() {
  if(gameState === "startScreen") {
    image(menuScreen,0, 0, width, height);
    fill("Yellow");
    textSize(75);
    textAlign(CENTER);
    text("PLANET EXPLORER", width/2, 150);
  }
}
