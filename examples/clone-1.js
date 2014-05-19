var vec = new Victor(100, 200);

vec
  .clone()
  .add(new Victor(50, 50))
  .toString();
// => x: 150, y: 250

vec.toString();
// => x: 100, y: 200
