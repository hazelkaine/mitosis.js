function Cell() {
    this.pos= createVector(random(width), random(height));
    this.r =  80;
    this.c = color(random(100,255), 0, random (100,255));

    this.move = function() {
    var vel =p5.Vector.random2D();
    this.pos.add(vel)

    }

    this.show = function() {
      noStroke()
        fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r)
    }
}
