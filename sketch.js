// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];
let noseX = 0;
let noseY = 0;
let front;
let left1; let left2; let left3; 
let right1; let right2; let right3;

function preload(){
  front = loadImage('faces/front.jpg');
  right1 = loadImage('faces/right1.jpg');
  right2 = loadImage('faces/right2.jpg');
  right3 = loadImage('faces/right3.jpg');
  left1 = loadImage('faces/left1.jpg');
  left2 = loadImage('faces/left2.jpg');
  left3 = loadImage('faces/left3.jpg');
}

function setup() {
  createCanvas(700, 700);
  // load up your video
  video = createCapture(VIDEO);
  video.size(width, height);
  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
  poseNet.on('pose', gotPose);
  // This sets up an event that fills the global variable "poses"
}

function gotPose(results) {
  poses = results;
  // with an array every time new poses are detected
  if (! poses || poses.length < 1) return;
  //leave this function if the results don't look right
  console.log(poses[0].pose.nose.x);
  noseX = poses[0].pose.nose.x;
  noseY = poses[0].pose.nose.y;
}

function draw() {
  //image(video, 0, 0, width, height);
  fill(255,0,0);
  //ellipse(noseX, noseY, 20,20);
   
  if (noseX > 0 && noseX < 100){
    image(right3,0,0);
  }
  
  if (noseX > 100 && noseX < 200){
    image(right2,0,0);
  }
  
  if (noseX > 200 && noseX < 300){
    image(right1,0,0);
  }
  
  if (noseX > 300 && noseX < 400){
    image(front,0,0);
  }
  
  if (noseX > 400 && noseX < 500){
    image(left1,0,0);
  }
  
  if (noseX > 500 && noseX < 600){
    image(left2,0,0);
  }
  
  if (noseX > 600 && noseX < 700){
    image(left3,0,0);
    
  } 
  
  
}
