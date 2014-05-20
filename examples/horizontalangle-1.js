Victor(100, 0)
  .horizontalAngle();
// => 0 (radians)

Victor(100, 100)
  .angleDeg();
// => 45 (degrees)

var vec = new Victor(0, 100);
vec.angle() === Math.PI / 2;
// true
