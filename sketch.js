// ICM-2016

// Take a look at the HTML file where some things have been
// added for mobile viewing
let myImage;
var colors;
var myImages;

function preload() {
  myImage1 = loadImage("./assets/01.jpg");
  myImage2 = loadImage("./assets/02.jpg");
  myImage3 = loadImage("./assets/03.jpg");
  myImage4 = loadImage("./assets/04.jpg");
  myImage5 = loadImage("./assets/05.jpg");
  myImage6 = loadImage("./assets/06.jpg");
  myImage7 = loadImage("./assets/07.jpg");
  
}


function setup() {
  // Make the canvas the size of the mobile device screen
  createCanvas(windowWidth, windowHeight);
  background(0);
  myImages = [myImage1, myImage2, myImage3, myImage4, myImage5, myImage6, myImage7,]
  myImage = random(myImages)
  image(myImage, 0, 0, windowWidth, windowHeight);
  // An array of five colors, one for each finger
  button = createButton('Change the maze');
  button.position(width/3 - width/6, height/12);
  button.size(width/3.2,height/15);

  buttonClear = createButton('Clear');
  buttonClear.position(3*(width/3 - width/6), height/12);
  buttonClear.size(width/3,height/15);
}

function changeImage() {
 
  let newImage;
  newImage = random(myImages)
  while(newImage == myImage) {
    newImage = random(myImages);
  }
  myImage = newImage
  image(myImage, 0, 0, windowWidth, windowHeight);
}

function clearImage() {
image(myImage, 0, 0, windowWidth, windowHeight);
}

function draw() {
  button.mousePressed(changeImage);
  buttonClear.mousePressed(clearImage)
  for (var i = 0; i < touches.length; i++) {
    noStroke();
    // One color per finger
    fill(255,0,0);
    // Draw a circle at each finger
    ellipse(touches[i].x, touches[i].y, 5, 5);
  }
}

// this prevents dragging screen around
function touchMoved() {
  return false;
}
