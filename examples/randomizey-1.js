// bounds
var topLeft = new Victor(50, 50);
var bottomRight = new Victor(200, 200);

Victor(10, 20)
  .randomizeY(topLeft, bottomRight)
  .toString();
// => x: 10, y: 54 (only Y randomized)
