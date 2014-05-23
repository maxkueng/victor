

<!-- Start index.js -->

# Victor - A JavaScript 2D vector class with methods for common vector operations

## Victor(x, y)

Constructor. Will also work without the `new` keyword

### Examples:
    var vec1 = new Victor(100, 50);
    var vec2 = Victor(42, 1337);

### Params: 

* **Number** *x* Value of the x axis
* **Number** *y* Value of the y axis

### Return:

* **Victor** 

## x

The X axis

### Examples:
    var vec = new Victor.fromArray(42, 21);

    vec.x;
    // => 42

## y

The Y axis

### Examples:
    var vec = new Victor.fromArray(42, 21);

    vec.y;
    // => 21

# Static

## Victor.fromArray(array)

Creates a new instance from an array

### Examples:
    var vec = Victor.fromArray([42, 21]);

    vec.toString();
    // => x:42, y:21

### Params: 

* **Array** *array* Array with the x and y values at index 0 and 1 respectively

### Return:

* **Victor** The new instance

## Victor.fromObject(obj)

Creates a new instance from an object

### Examples:
    var vec = Victor.fromObject({ x: 42, y: 21 });

    vec.toString();
    // => x:42, y:21

### Params: 

* **Object** *obj* Object with the values for x and y

### Return:

* **Victor** The new instance

# Manipulation

These functions are chainable.

## addX(vector)

Adds another vector's X axis to this one

### Examples:
    var vec1 = new Victor(10, 10);
    var vec2 = new Victor(20, 30);

    vec1.addX(vec2);
    vec1.toString();
    // => x:30, y:10

### Params: 

* **Victor** *vector* The other vector you want to add to this one

### Return:

* **Victor** `this` for chaining capabilities

## addY(vector)

Adds another vector's Y axis to this one

### Examples:
    var vec1 = new Victor(10, 10);
    var vec2 = new Victor(20, 30);

    vec1.addY(vec2);
    vec1.toString();
    // => x:10, y:40

### Params: 

* **Victor** *vector* The other vector you want to add to this one

### Return:

* **Victor** `this` for chaining capabilities

## add(vector)

Adds another vector to this one

### Examples:
    var vec1 = new Victor(10, 10);
    var vec2 = new Victor(20, 30);

    vec1.add(vec2);
    vec1.toString();
    // => x:30, y:40

### Params: 

* **Victor** *vector* The other vector you want to add to this one

### Return:

* **Victor** `this` for chaining capabilities

## subtractX(vector)

Subtracts the X axis of another vector from this one

### Examples:
    var vec1 = new Victor(100, 50);
    var vec2 = new Victor(20, 30);

    vec1.subtractX(vec2);
    vec1.toString();
    // => x:80, y:50

### Params: 

* **Victor** *vector* The other vector you want subtract from this one

### Return:

* **Victor** `this` for chaining capabilities

## subtractY(vector)

Subtracts the Y axis of another vector from this one

### Examples:
    var vec1 = new Victor(100, 50);
    var vec2 = new Victor(20, 30);

    vec1.subtractY(vec2);
    vec1.toString();
    // => x:100, y:20

### Params: 

* **Victor** *vector* The other vector you want subtract from this one

### Return:

* **Victor** `this` for chaining capabilities

## subtract(vector)

Subtracts another vector from this one

### Examples:
    var vec1 = new Victor(100, 50);
    var vec2 = new Victor(20, 30);

    vec1.subtract(vec2);
    vec1.toString();
    // => x:80, y:20

### Params: 

* **Victor** *vector* The other vector you want subtract from this one

### Return:

* **Victor** `this` for chaining capabilities

## divideX(number)

Divides the X axis by a number

### Examples:
    var vec = new Victor(100, 50);

    vec.divideX(2);
    vec.toString();
    // => x:50, y:50

### Params: 

* **Number** *number* The number to divide the axis by

### Return:

* **Victor** `this` for chaining capabilities

## divideY(number)

Divides the Y axis by a number

### Examples:
    var vec = new Victor(100, 50);

    vec.divideY(2);
    vec.toString();
    // => x:100, y:25

### Params: 

* **Number** *number* The number to divide the axis by

### Return:

* **Victor** `this` for chaining capabilities

## divide(number)

Divides both vector axis by a number

### Examples:
    var vec = new Victor(100, 50);

    vec.divide(2);
    vec.toString();
    // => x:50, y:25

### Params: 

* **Number** *number* The number to divide the axis by

### Return:

* **Victor** `this` for chaining capabilities

## invertX()

Inverts the X axis

### Examples:
    var vec = new Victor(100, 50);

    vec.invertX();
    vec.toString();
    // => x:-100, y:50

### Return:

* **Victor** `this` for chaining capabilities

## invertY()

Inverts the Y axis

### Examples:
    var vec = new Victor(100, 50);

    vec.invertY();
    vec.toString();
    // => x:100, y:-50

### Return:

* **Victor** `this` for chaining capabilities

## invert()

Inverts both axis

### Examples:
    var vec = new Victor(100, 50);

    vec.invert();
    vec.toString();
    // => x:-100, y:-50

### Return:

* **Victor** `this` for chaining capabilities

## multiplyX(number)

Multiplies the X axis by a number

### Examples:
    var vec = new Victor(100, 50);

    vec.multiplyX(2);
    vec.toString();
    // => x:200, y:50

### Params: 

* **Number** *number* The number to multiply the axis with

### Return:

* **Victor** `this` for chaining capabilities

## multiplyY(number)

Multiplies the Y axis by a number

### Examples:
    var vec = new Victor(100, 50);

    vec.multiplyY(2);
    vec.toString();
    // => x:100, y:100

### Params: 

* **Number** *number* The number to multiply the axis with

### Return:

* **Victor** `this` for chaining capabilities

## multiply(number)

Multiplies both vector axis by a number

### Examples:
    var vec = new Victor(100, 50);

    vec.multiply(2);
    vec.toString();
    // => x:200, y:100

### Params: 

* **Number** *number* The number to multiply the axis with

### Return:

* **Victor** `this` for chaining capabilities

## normalize()

Normalize

### Return:

* **Victor** `this` for chaining capabilities

## limit(max, factor)

If the absolute vector axis is greater than `max`, multiplies the axis by `factor`

### Examples:
    var vec = new Victor(100, 50);

    vec.limit(80, 0.9);
    vec.toString();
    // => x:90, y:50

### Params: 

* **Number** *max* The maximum value for both x and y axis
* **Number** *factor* Factor by which the axis are to be multiplied with

### Return:

* **Victor** `this` for chaining capabilities

## randomize(topLeft, bottomRight)

Randomizes both vector axis with a value between 2 vectors

### Examples:
    var vec = new Victor(100, 50);

    vec.randomize(new Victor(50, 60), new Victor(70, 80`));
    vec.toString();
    // => x:67, y:73

### Params: 

* **Victor** *topLeft* first vector
* **Victor** *bottomRight* second vector

### Return:

* **Victor** `this` for chaining capabilities

## randomizeX(topLeft, bottomRight)

Randomizes the y axis with a value between 2 vectors

### Examples:
    var vec = new Victor(100, 50);

    vec.randomizeX(new Victor(50, 60), new Victor(70, 80`));
    vec.toString();
    // => x:55, y:50

### Params: 

* **Victor** *topLeft* first vector
* **Victor** *bottomRight* second vector

### Return:

* **Victor** `this` for chaining capabilities

## randomizeY(topLeft, bottomRight)

Randomizes the y axis with a value between 2 vectors

### Examples:
    var vec = new Victor(100, 50);

    vec.randomizeY(new Victor(50, 60), new Victor(70, 80`));
    vec.toString();
    // => x:100, y:66

### Params: 

* **Victor** *topLeft* first vector
* **Victor** *bottomRight* second vector

### Return:

* **Victor** `this` for chaining capabilities

## randomizeAny(topLeft, bottomRight)

Randomly randomizes either axis between 2 vectors

### Examples:
    var vec = new Victor(100, 50);

    vec.randomizeAny(new Victor(50, 60), new Victor(70, 80));
    vec.toString();
    // => x:100, y:77

### Params: 

* **Victor** *topLeft* first vector
* **Victor** *bottomRight* second vector

### Return:

* **Victor** `this` for chaining capabilities

## unfloat()

Rounds both axis to an integer value

### Examples:
    var vec = new Victor(100.2, 50.9);

    vec.unfloat();
    vec.toString();
    // => x:100, y:51

### Return:

* **Victor** `this` for chaining capabilities

## mixX(vector, amount)

Performs a linear blend / interpolation of the X axis towards another vector

### Examples:
    var vec1 = new Victor(100, 100);
    var vec2 = new Victor(200, 200);

    vec1.mixX(vec2, 0.5);
    vec.toString();
    // => x:150, y:100

### Params: 

* **Victor** *vector* The other vector
* **Number** *amount* The blend amount (optional, default: 0.5)

### Return:

* **Victor** `this` for chaining capabilities

## mixY(vector, amount)

Performs a linear blend / interpolation of the Y axis towards another vector

### Examples:
    var vec1 = new Victor(100, 100);
    var vec2 = new Victor(200, 200);

    vec1.mixY(vec2, 0.5);
    vec.toString();
    // => x:100, y:150

### Params: 

* **Victor** *vector* The other vector
* **Number** *amount* The blend amount (optional, default: 0.5)

### Return:

* **Victor** `this` for chaining capabilities

## mix(vector, amount)

Performs a linear blend / interpolation towards another vector

### Examples:
    var vec1 = new Victor(100, 100);
    var vec2 = new Victor(200, 200);

    vec1.mix(vec2, 0.5);
    vec.toString();
    // => x:150, y:150

### Params: 

* **Victor** *vector* The other vector
* **Number** *amount* The blend amount (optional, default: 0.5)

### Return:

* **Victor** `this` for chaining capabilities

# Products

## clone()

Creates a clone of this vector

### Examples:
    var vec1 = new Victor(10, 10);
    var vec2 = vec1.clone();

    vec2.toString();
    // => x:10, y:10

### Return:

* **Victor** A clone of the vector

## copyX()

Copies another vector's X component in to its own

### Examples:
    var vec1 = new Victor(10, 10);
    var vec2 = new Victor(20, 20);
    var vec2 = vec1.copyX(vec1);

    vec2.toString();
    // => x:20, y:10

### Return:

* **Victor** `this` for chaining capabilities

## copyY()

Copies another vector's Y component in to its own

### Examples:
    var vec1 = new Victor(10, 10);
    var vec2 = new Victor(20, 20);
    var vec2 = vec1.copyY(vec1);

    vec2.toString();
    // => x:10, y:20

### Return:

* **Victor** `this` for chaining capabilities

## copy()

Copies another vector's X and Y components in to its own

### Examples:
    var vec1 = new Victor(10, 10);
    var vec2 = new Victor(20, 20);
    var vec2 = vec1.copy(vec1);

    vec2.toString();
    // => x:20, y:20

### Return:

* **Victor** `this` for chaining capabilities

## dot(vector)

Calculates the dot product of this vector and another

### Examples:
    var vec1 = new Victor(100, 50);
    var vec2 = new Victor(200, 60);

    vec1.dot(vec2);
    // => 23000

### Params: 

* **Victor** *vector* The second vector

### Return:

* **Number** Dot product

## distanceX(vector)

Calculates the distance of the X axis between this vector and another

### Examples:
    var vec1 = new Victor(100, 50);
    var vec2 = new Victor(200, 60);

    vec1.distanceX(vec2);
    // => -100

### Params: 

* **Victor** *vector* The second vector

### Return:

* **Number** Distance

## absDistanceX(vector)

Same as `distanceX()` but always returns an absolute number

### Examples:
    var vec1 = new Victor(100, 50);
    var vec2 = new Victor(200, 60);

    vec1.absDistanceX(vec2);
    // => 100

### Params: 

* **Victor** *vector* The second vector

### Return:

* **Number** Absolute distance

## distanceY(vector)

Calculates the distance of the Y axis between this vector and another

### Examples:
    var vec1 = new Victor(100, 50);
    var vec2 = new Victor(200, 60);

    vec1.distanceY(vec2);
    // => -10

### Params: 

* **Victor** *vector* The second vector

### Return:

* **Number** Distance

## absDistanceY(vector)

Same as `distanceY()` but always returns an absolute number

### Examples:
    var vec1 = new Victor(100, 50);
    var vec2 = new Victor(200, 60);

    vec1.distanceY(vec2);
    // => 10

### Params: 

* **Victor** *vector* The second vector

### Return:

* **Number** Absolute distance

## distance(vector)

Calculates the euclidean distance between this vector and another

### Examples:
    var vec1 = new Victor(100, 50);
    var vec2 = new Victor(200, 60);

    vec1.distance(vec2);
    // => 100.4987562112089

### Params: 

* **Victor** *vector* The second vector

### Return:

* **Number** Distance

## distanceSq(vector)

Calculates the squared euclidean distance between this vector and another

### Examples:
    var vec1 = new Victor(100, 50);
    var vec2 = new Victor(200, 60);

    vec1.distanceSq(vec2);
    // => 10100

### Params: 

* **Victor** *vector* The second vector

### Return:

* **Number** Distance

## length()

Calculates the length or magnitude of the vector

### Examples:
    var vec = new Victor(100, 50);

    vec.length();
    // => 111.80339887498948

### Return:

* **Number** Length / Magnitude

## lengthSq()

Squared length / magnitude

### Examples:
    var vec = new Victor(100, 50);

    vec.lengthSq();
    // => 12500

### Return:

* **Number** Length / Magnitude

# Utility Methods

## toString()

Returns an string representation of the vector

### Examples:
    var vec = new Victor(10, 20);

    vec.toString();
    // => x:10, y:20

### Return:

* **String** 

## toArray()

Returns an array representation of the vector

### Examples:
    var vec = new Victor(10, 20);

    vec.toArray();
    // => [10, 20]

### Return:

* **Array** 

## toObject()

Returns an object representation of the vector

### Examples:
    var vec = new Victor(10, 20);

    vec.toObject();
    // => { x: 10, y: 20 }

### Return:

* **Object** 

<!-- End index.js -->

