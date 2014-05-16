var domready = require('domready');
var raf = require('raf');
var Victor = require('./victor');

var header;
var canvas;
var ctx;
var canvasTopLeft;
var canvasBottomRight;

canvas = document.querySelector('.header-canvas');
ctx = canvas.getContext('2d');
ctx.font = '10px sans-serif';

domready(function () {
	header = document.getElementById('header-wrapper');
	console.log(header.offsetHeight)

	canvasTopLeft = new Victor(0, 0);
	canvasBottomRight = new Victor(header.offsetWidth, header.offsetHeight);

	canvas.width = canvasBottomRight.x;
	canvas.height = canvasBottomRight.y;
});


var sprites = {};

loadImages({
	ship: '../../assets/ship.png',
	shipActive: '../../assets/ship-active.png'
}, loop);

function loadImages (images, callback) {
	var name;
	var totalImages = Object.keys(images).length;
	var loadedImages = 0;

	function onload () {
		loadedImages++;
		if (loadedImages >= totalImages) {
			callback(null, images);
		}
	}

	for (name in images) {
		var image = new Image();
		image.onload = onload;
		image.src = images[name];

		sprites[name] = image;
	}
}

		var degrees = 180 / Math.PI;
function Ship (ctx) {
	this.width = 20;
	this.height = 20;
	this.position = new Victor(300, 300);
	this.velocity = new Victor(1, -1);

	this.move = function () {
		var bottomDistance = canvasBottomRight.distanceY(this.position);
		ctx.fillStyle = 'lime';
		ctx.fillText('b: ' + bottomDistance, 100, 100);

		//this.velocity.subtractX(new Victor(0.01, 0.1));

		this.position.add(this.velocity);
	};

	this.draw = function () {
		var spritePosition = this.position.copy().subtract(new Victor(this.width / 2, this.height / 2));

		ctx.save();
		ctx.translate(this.position.x, this.position.y);
		ctx.rotate(this.velocity.angle() + Math.PI / 2);
		ctx.translate(this.width / 2 * -1, this.height / 2 * -1);
		ctx.drawImage(sprites.ship, 0, 0);
		ctx.restore();
	};
}

var ship = new Ship(ctx);

function loop () {
	draw();
	move();
	raf(loop);
}

function move () {
	ship.move();
}

function draw () {
	/*
	*/

	ctx.fillStyle = 'lime';
	ctx.clearRect(0, 0, canvasBottomRight.x, canvasBottomRight.y);
//	ctx.fillRect(0, 0, canvasBottomRight.x, canvasBottomRight.y);
//	ctx.clearRect(ship.position.x - ship.width, ship.position.y - ship.height, ship.width * 2, ship.height * 2);
	ship.draw();

}
