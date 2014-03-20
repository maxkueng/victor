exports = module.exports = Vector;

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
Vector.prototype.copy = function () {
	return new Vector(this.x, this.y);
};

Vector.prototype.add = function (vec) {
	this.x += vec.x;
	this.y += vec.y;
	return this;
};

Vector.prototype.sub = function (vec) {
	this.x -= vec.x;
	this.y -= vec.y;
	return this;
};

Vector.prototype.divide = function (scalar) {
	this.x /= scalar;
	this.y /= scalar;
	return this;
};

Vector.prototype.multiply = function (scalar) {
	this.x *= scalar;
	this.y *= scalar;
	return this;
};

Vector.prototype.dot = function (vec2) {
	return this.x * vec2.x + this.y * vec2.y;
};

Vector.prototype.distanceX = function (vec) {
	return this.x - vec.x;
};

Vector.prototype.distanceY = function (vec) {
	return this.y - vec.y;
};

Vector.prototype.distance = function (vec) {
	var dx = this.distanceX(vec),
		dy = this.distanceY(vec);

	return Math.sqrt(dx * dx + dy * dy);
};

Vector.prototype.length = function () {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector.prototype.limit = function (max, factor) {
	if (Math.abs(this.x) > max){ this.x *= factor; }
	if (Math.abs(this.y) > max){ this.y *= factor; }
	return this;
};

Vector.prototype.randomize = function (maxX, maxY) {
	var x = Math.floor(Math.random() * maxX),
		y = Math.floor(Math.random() * maxY);

	return new Vector(x, y);
};

Vector.prototype.randomizeX = function (max) {
	var x = Math.floor(Math.random() * max);
	this.x = x;
	return this;
};

Vector.prototype.randomizeY = function (max) {
	var y = Math.floor(Math.random() * max);
	this.y = y;
	return this;
};

Vector.prototype.randomizeAny = function (maxX, maxY) {
	if (!! Math.round(Math.random())) {
		this.randomizeX(maxX);
	} else {
		this.randomizeY(maxY);
	}
	return this;
};

Vector.prototype.unfloat = function () {
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
	return this;
};

//-----------------------------------------------------------------------
// Utility Methods
//-----------------------------------------------------------------------
Vector.prototype.toString = function () {
	return 'x:' + this.x + ', y:' + this.y;
};
