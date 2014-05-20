// bounds
var topLeft = new Victor(50, 50);
var bottomRight = new Victor(200, 200);

Victor(10, 20)
  .randomizeX(topLeft, bottomRight)
  .toString();
// => x: 167, y: 20 (only X randomized)
