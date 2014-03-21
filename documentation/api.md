

<!-- Start index.js -->

## copy()

Creates a copy of this vector

### Examples:
    var vec = new Victor(10, 10);
    var vec2 = vec.copy();

    vec2.toString();
    // => x:10, y:10

### Return:

* **Victor** A copy of the vector

## add(vector)

Adds another vector to this one

### Examples:
    var vec = new Victor(10, 10);
    var vec2 = new Victor(20, 30);

    vec.add(vec2);
    vec.toString();
    // => x:30, y:40

### Params: 

* **Victor** *vector* The other vector you want to add to this one

### Return:

* **Victor** `this` for chaining capabilities

## subtract(vector)

Subtracts another vector from this one

### Examples:
    var vec = new Victor(100, 50);
    var vec2 = new Victor(20, 30);

    vec.subtract(vec2);
    vec.toString();
    // => x:80, y:20

### Params: 

* **Victor** *vector* The other vector you want subtract from this one

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

## multiply(number)

Multiplies both vector axis by a number

### Examples:
    var vec = new Victor(100, 50);

    vec.multiply(2);
    vec.toString();
    // => x:200, y:200

### Params: 

* **Number** *number* The number to multiply the axis with

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

* **Victor** `this` for chaining capabilities

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

* **Victor** `this` for chaining capabilities

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

<!-- End index.js -->

