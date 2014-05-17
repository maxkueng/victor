var vec1 = new Victor(50, 60);

vec1
  .add(new Victor(20, 30))
  .toString();
// => x:70, y:90

var vec2 = new Victor(50, 60);

vec2
  .addX(new Victor(20, 30))
  .toString();
// => x:70, y:60

var vec3 = new Victor(50, 60);

vec3
  .addY(new Victor(20, 30))
  .toString();
// => x:50, y:90
