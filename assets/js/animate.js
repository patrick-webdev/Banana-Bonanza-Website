//https://p5js.org/examples/simulate-particles.html

// this class describes the properties of a single particle.
class Particle {
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,50);
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-.5,.75);
  }

// creation of a particle.
  createParticle() {
    noStroke();
    fill('rgba(204,204,204,0.1)');
    circle(this.x,this.y,this.r);
  }

// setting the particle in motion.
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

// this function creates the connections(lines)
// between particles which are less than a certain distance apart
}

// an array to add multiple particles
let particles = [];

function setup() {
  let cnv = createCanvas(window.innerWidth, window.innerHeight+5);
  cnv.id('animation');
  cnv.parent('background');
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
}

function draw() {
  background('#333333');
// background("#ff0000");
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
  }
}

window.onresize = ()=>{
    resizeCanvas(window.innerWidth, window.innerHeight+5);
}