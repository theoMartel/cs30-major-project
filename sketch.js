// CompSci 30 Final Major Project
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  movePlayer();
}



function movePlayer() {
  if (keyIsDown("w") || keyIsDown("W")) {
    console.log("forward");
  }
}