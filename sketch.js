var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
var ground;
var gSlider;
 
 
function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
 
 


    var options = {
        isStatic: true
    }
    ground = Bodies.rectangle(windowWidth/2, windowHeight/2+350, windowWidth, 10, options);
    World.add(world, ground);
}
 
function mousePressed() {
    if (mouseY < windowHeight) {
        boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
    }
}
 
function draw() {
    background(51);
 
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    noStroke();
    fill(170);
    strokeWeight(4);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 10);
}
 
function Box(x, y, w, h, options) {
    var options = {
        friction: 0.5,
        restitution: 0.5,
    }
 
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
 
    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
 
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(127);
        rect(0, 0, this.w, this.h);
        pop();
    }
}