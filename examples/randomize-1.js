// bounds
var topLeft = new Victor(50, 50);
var bottomRight = new Victor(200, 200);

var random1 = new Victor(10, 20)
                    .randomize(topLeft, bottomRight);

var random2 = new Victor(10, 20)
                    .randomizeX(topLeft, bottomRight);

var random3 = new Victor(10, 20)
                    .randomizeY(topLeft, bottomRight);

var random4 = new Victor(10, 20)
                    .randomizeAny(topLeft, bottomRight);

random1.toString();
// => x: 137, y: 160 (both cmponents randomized)

random2.toString();
// => x: 167, y: 20 (only X randomized)

random3.toString();
// => x: 10, y: 54 (only Y randomized)

random4.toString();
// => x: 10, y: 166 (one random component randomized)
