var vec = new Victor(100, 0);

vec.horizontalAngleDeg();
// => 0

vec.verticalAngleDeg();
// => 90

vec.rotateByDeg(90);

vec.toString();
// => x: 0, y: 100


var vec2 = new Victor(100, 0);

vec2.rotate(-Math.PI);

vec2.toString();
// => x: -100, y: 0
