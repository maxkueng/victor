

<!-- Start index.js -->

## copy()

Creates a copy of this vector

### Examples:
    var vec = new Victor(10, 10);
    var vec2 = vec.copy();

    vec2.toString();
    // => x:10, y:10

### Return:

* **Vector** the new vector

## add(vector)

Adds another vector to this one

### Examples:
    var vec = new Victor(10, 10);
    var vec2 = new Victor(20, 30);

    vec.add(vec2);
    vec.toString();
    // => x:30, y:40

### Params: 

* **Vector** *vector* the other vector you want to add to this one

### Return:

* **Vector** this for chaining capabilities

## sub(vector)

Subtracts another vector from this one

### Examples:
    var vec = new Victor(100, 50);
    var vec2 = new Victor(20, 30);

    vec.sub(vec2);
    vec.toString();
    // => x:80, y:20

### Params: 

* **Vector** *vector* the other vector you want subtract from this one

### Return:

* **Vector** this for chaining capabilities

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

