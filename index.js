exports = module.exports = Vector;

/**
 * Constructor. Will also work without the `new` keyword
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = Victor(42, 1337);
 *
 * @param {Number} x Value of the x axis
 * @param {Number} y Value of the y axis
 * @return {Victor}
 * @api public
 */
function Vector (x, y) {
	if (!(this instanceof Vector)) {
		return new Vector(x, y);
	}
	this.x = x || 0;
	this.y = y || 0;
};
//-----------------------------------------------------------------------
// Static Methods
//-----------------------------------------------------------------------
Vector.add = function (vecA, vecB) {
	return new Vector(vecA.x + vecB.x, vecA.y + vecB.y);
};

Vector.subtract = function (vecA, vecB) {
	return new Vector(vecA.x - vecB.x, vecA.y - vecB.y);
};

Vector.multiply = function (vec, scalar) {
	return new Vector(vec.x * scalar, vec.y * scalar);
};

Vector.divide = function (vec, scalar) {
	return new Vector(vec.x / scalar, vec.y / scalar);
};

Vector.mix = function (vecA, vecB, ammount) {
	ammount = ammount || 0.5
	var x = (1 - ammount) * vecA.x + ammount * vecB.x;
	var y = (1 - ammount) * vecA.y + ammount * vecB.y;
	return new Vector(x, y);
};

Vector.random = function (maxX, maxY) {
	var x = Math.floor(Math.random() * maxX),
		y = Math.floor(Math.random() * maxY);

	return new Vector(x, y);
};

//-----------------------------------------------------------------------
// Instance Methods
//-----------------------------------------------------------------------
/**
 * Creates a copy of this vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 10);
 *     var vec2 = vec.copy();
 *
 *     vec2.toString();
 *     // => x:10, y:10
 *
 * @return {Victor} A copy of the vector
 * @api public
 */
Vector.prototype.copy = function () {
	return new Vector(this.x, this.y);
};

/**
 * Adds another vector to this one
 *
 * ### Examples:
 *     var vec = new Victor(10, 10);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec.add(vec2);
 *     vec.toString();
 *     // => x:30, y:40
 *
 * @param {Victor} vector The other vector you want to add to this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Vector.prototype.add = function (vec) {
	this.x += vec.x;
	this.y += vec.y;
	return this;
};

/**
 * Subtracts another vector from this one
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec.subtract(vec2);
 *     vec.toString();
 *     // => x:80, y:20
 *
 * @param {Victor} vector The other vector you want subtract from this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Vector.prototype.subtract = function (vec) {
	this.x -= vec.x;
	this.y -= vec.y;
	return this;
};

/**
 * Divides both vector axis by a number
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.divide(2);
 *     vec.toString();
 *     // => x:50, y:25
 *
 * @param {Number} number The number to divide the axis by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Vector.prototype.divide = function (scalar) {
	this.x /= scalar;
	this.y /= scalar;
	return this;
};

/**
 * Multiplies both vector axis by a number
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.multiply(2);
 *     vec.toString();
 *     // => x:200, y:200
 *
 * @param {Number} number The number to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Vector.prototype.multiply = function (scalar) {
	this.x *= scalar;
	this.y *= scalar;
	return this;
};

/**
 * Calculates the dot product of this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.dot(vec2);
 *     // => 23000
 *
 * @param {Victor} vector The second vector
 * @return {Number} Dot product
 * @api public
 */
Vector.prototype.dot = function (vec2) {
	return this.x * vec2.x + this.y * vec2.y;
};

/**
 * Calculates the distance of the X axis between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceX(vec2);
 *     // => -100
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Vector.prototype.distanceX = function (vec) {
	return this.x - vec.x;
};

/**
 * Calculates the distance of the Y axis between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceY(vec2);
 *     // => -10
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Vector.prototype.distanceY = function (vec) {
	return this.y - vec.y;
};

/**
 * Calculates the euclidean distance between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distance(vec2);
 *     // => 100.4987562112089
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Vector.prototype.distance = function (vec) {
	var dx = this.distanceX(vec),
		dy = this.distanceY(vec);

	return Math.sqrt(dx * dx + dy * dy);
};

/**
 * Calculates the length or magnitude of the vector
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *
 *     vec1.length();
 *     // => 111.80339887498948
 *
 * @return {Number} Length / Magnitude
 * @api public
 */
Vector.prototype.length = function () {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector.prototype.norm = function () {
	if (this.length() === 0) {
		this.x = 1;
		this.y = 0;
	} else {
		this.divide(this.length());
	}
	return this;
};

/**
 * If the absolute vector axis is greater than `max`, multiplies the axis by `factor`
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.limit(80, 0.9);
 *     vec.toString();
 *     // => x:90, y:50
 *
 * @param {Number} max The maximum value for both x and y axis
 * @param {Number} factor Factor by which the axis are to be multiplied with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Vector.prototype.limit = function (max, factor) {
	if (Math.abs(this.x) > max){ this.x *= factor; }
	if (Math.abs(this.y) > max){ this.y *= factor; }
	return this;
};

/**
 * Randomizes both axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomize(200, 100);
 *     vec.toString();
 *     // => x:177, y:61
 *
 * @param {Number} maxX Maximum value for the x axis
 * @param {Number} maxY Maximum value for the y axis
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Vector.prototype.randomize = function (maxX, maxY) {
	var x = Math.floor(Math.random() * maxX),
		y = Math.floor(Math.random() * maxY);

	return new Vector(x, y);
};

/**
 * Randomizes the x axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeX(100);
 *     vec.toString();
 *     // => x:76, y:50
 *
 * @param {Number} max Maximum value for the x axis
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Vector.prototype.randomizeX = function (max) {
	var x = Math.floor(Math.random() * max);
	this.x = x;
	return this;
};

/**
 * Randomizes the y axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeY(100);
 *     vec.toString();
 *     // => x:100, y:66
 *
 * @param {Number} max Maximum value for the y axis
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Vector.prototype.randomizeY = function (max) {
	var y = Math.floor(Math.random() * max);
	this.y = y;
	return this;
};

/**
 * Randomly randomizes either axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeAny(200, 100);
 *     vec.toString();
 *     // => x:100, y:54
 *
 * @param {Number} maxX Maximum value for the x axis
 * @param {Number} maxY Maximum value for the y axis
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Vector.prototype.randomizeAny = function (maxX, maxY) {
	if (!! Math.round(Math.random())) {
		this.randomizeX(maxX);
	} else {
		this.randomizeY(maxY);
	}
	return this;
};

/**
 * Rounds both axis to an integer value
 *
 * ### Examples:
 *     var vec = new Victor(100.2, 50.9);
 *
 *     vec.unfloat();
 *     vec.toString();
 *     // => x:100, y:51
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Vector.prototype.unfloat = function () {
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
	return this;
};

//-----------------------------------------------------------------------
// Utility Methods
//-----------------------------------------------------------------------
/**
 * Returns an string representation of the vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 20);
 *
 *     vec.toString();
 *     // => x:10, y:20
 *
 * @return {String}
 * @api public
 */
Vector.prototype.toString = function () {
	return 'x:' + this.x + ', y:' + this.y;
};

/**
 * Returns an array representation of the vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 20);
 *
 *     vec.toArray();
 *     // => [10, 20]
 *
 * @return {Array}
 * @api public
 */
Vector.prototype.toArray = function () {
	return [ this.x, this.y ];
};
