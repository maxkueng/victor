Victor(50, 60)
  .add(new Victor(20, 30))
  .toString();
// => x:70, y:90

Victor(50, 60)
  .addX(new Victor(20, 30))
  .toString();
// => x:70, y:60

Victor(50, 60)
  .addY(new Victor(20, 30))
  .toString();
// => x:50, y:90
