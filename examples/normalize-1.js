var vec1 = new Victor(100, 100);

var vec2 = vec1
  .clone()
  .normalize();

vec1.length();
// => 141.42135

vec2.length();
// => 1

vec2.angle() === vec1.angle();
// => true

vec2.toString();
// => x:0.7071067811865475, y:0.7071067811865475
