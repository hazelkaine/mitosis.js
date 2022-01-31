const cells = [];
function setup() {
  createCanvas(800, 800);
  cells.push(new Cell());
  cells.push(new Cell());
}

function draw() {
  background(200);
  for (var i = 0; i < cells.length; i++) {
    cells[i].move();
    cells[i].show();
  }
}

let released = true;
function mouseReleased(){ released = true; }
function mousePressed() {
  if(!released) return;
  released = false;
  const mouse = touches.length > 0 ? touches[0] : createVector(mouseX, mouseY);
  for (var i = cells.length-1; i>=0; i--) {
    let cell = cells[i];
    if (cell.contains(mouse.x, mouse.y)) {
      cells.push(cell.mitosis());
      cells.push(cell.mitosis());
      cells.splice(i,1);
      break; // prevent overlapping cells from splitting
    }
  }
}

class Cell {
  constructor(pos=createVector(random(width), random(height), 100), r=70, acc=p5.Vector.random2D()){
    this.pos = pos.copy();
    this.r = r;
    this.vel = createVector();
    this.acc = acc.copy().setMag(2);
    this.c = color(random(0, 0,0), (255), random(0, 255,0), 100);
  }

  contains(x, y) {
    return dist(this.pos.x, this.pos.y, x, y) <= this.r;
  }

  mitosis() {
    const dir = p5.Vector.random2D();
    dir.setMag(0.6);
    return new Cell(this.pos, this.r * 0.8, dir);
  }

  move() {
    if(this.pos.x - this.r <= 0 || this.pos.x + this.r >= width)
      this.acc.x *= -1;
    if(this.pos.y - this.r <= 0 || this.pos.y + this.r >= height)
      this.acc.y *= -1;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.setMag(0);
  }

  show() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }
}
