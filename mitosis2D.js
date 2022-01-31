var cells =[];
function setup() {
    createCanvas(400, 400)
    cells = new Cell();
    cells.push(cell);
 
}
  
  
  function draw() {
    background(51);
   for (var i = 0; i<cells.length; i++){
        cell[i].move();
        cell[i].show();
  }
  }
