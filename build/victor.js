!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.Victor=e():"undefined"!=typeof global?global.Victor=e():"undefined"!=typeof self&&(self.Victor=e())}(function(){var define,module,exports;
return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

Vector.prototype.divide = function (vec) {
	this.x /= vec.x;
	this.y /= vec.y;
	return this;
};

Vector.prototype.multiply = function (vec) {
	this.x *= vec.x;
	this.y *= vec.y;
	return this;
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

Vector.prototype.unfloatCopy = function () {
	return new Vector(Math.round(this.x), Math.round(this.y));
};

//-----------------------------------------------------------------------
// Utility Methods
//-----------------------------------------------------------------------
Vector.prototype.toString = function () {
	return 'x:' + this.x + ', y:' + this.y;
};

},{}]},{},[1])
(1)
});
;