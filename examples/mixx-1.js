var vec1 = new Victor(100, 100);
var vec2 = new Victor(300, 300);

vec1
  .clone()
  .mixX(vec2, 0.5)
  .toString();
// => x: 200, y: 100
