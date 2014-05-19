Victor(100, 200)
  .subtract(new Victor(20, 30))
  .toString();
// => x:80, y:170

Victor(100, 200)
  .subtractX(new Victor(20, 30))
  .toString();
// => x:80, y:200

Victor(100, 200)
  .addY(new Victor(20, 30))
  .toString();
// => x:100, y:170
