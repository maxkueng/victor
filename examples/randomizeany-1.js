// bounds
var topLeft = new Victor(50, 50);
var bottomRight = new Victor(200, 200);

Victor(10, 20)
  .randomizeAny(topLeft, bottomRight)
  .toString();
// => x: 10, y: 166 (one random component randomized)
