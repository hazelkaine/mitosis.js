var cells =[];
function setup() {
    createCanvas(400, 400);
    cells.push(new Cell());
 
}

  
  function draw() {
    background(51);
   for (var i = 0; i< cells.length; i++){
        cells[i].move();
        cells[i].show();
  }
