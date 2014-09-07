var domready = require('domready');
var raf = require('raf');
var Victor = require('./victor');

exports = module.exports = animation;

function animation (el) {
	var canvas;
	var ctx;
	var canvasTopLeft;
	var canvasBottomRight;

	var ship;
	var sprites = {};

	var gold = [];

	canvas = document.createElement('canvas');
	ctx = canvas.getContext('2d');
	ctx.font = '10px sans-serif';

	domready(function () {
		el.insertBefore(canvas, el.firstChild);
		reset();
		start();

		window.addEventListener('resize', function () {
			reset();
		});

		el.addEventListener('click', function (e) {
			gold.push(new Victor(e.pageX, e.pageY));
		});
	});

	function reset () {
		canvasTopLeft = new Victor(0, 0);
		canvasBottomRight = new Victor(el.offsetWidth, el.offsetHeight - 50);

		canvas.width = canvasBottomRight.x;
		canvas.height = canvasBottomRight.y;

		ship = new Ship(ctx);
		ship.position.randomize(canvasTopLeft, canvasBottomRight);
	}

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

	function canvasDistances (vec) {
		return {
			top: vec.distanceY(canvasTopLeft),
			left: vec.distanceX(canvasTopLeft),
			right: canvasBottomRight.distanceX(vec),
			bottom: canvasBottomRight.distanceY(vec)
		};
	}

	function Ship (ctx) {
		this.width = 20;
		this.height = 20;
		this.position = new Victor();
		this.velocity = new Victor(1, 1);
		this.target = new Victor(400, 200);

		this.happyTime = 2000;
		this.happy = 0;
		this.stressed = false;

		this.selectTarget = function () {
			if (!gold.length) {
				this.target.randomizeAny(canvasTopLeft, canvasBottomRight);
				return;
			}

			this.target.copy(gold[0]);
		};

		this.move = function () {
			var bottomDistance = canvasBottomRight.distanceY(this.position);

			var acceleration = new Victor(this.target.distanceX(this.position) / 200, this.target.distanceY(this.position) / 200);

			this.velocity
				.add(acceleration)
				.limit(3, 0.6);

			this.position.add(this.velocity);

			var correction = new Victor(0.8, 0.8);

			if (gold.length) {
				var goldDistance = this.position.distance(gold[0]);
				if (goldDistance < 50) {
					this.velocity.multiply(correction);
				}

				if (goldDistance < 5) {
					gold.shift();
					this.selectTarget();
					this.happy = +Date.now();
				}
			}

			var distances = canvasDistances(this.position);
			var horizontalTreshold = canvasBottomRight.x / 5;
			var verticalTreshold = canvasBottomRight.y / 5;

			this.stressed = (
				   distances.top < verticalTreshold
				|| distances.bottom < verticalTreshold 
				|| distances.left < horizontalTreshold 
				|| distances.right < horizontalTreshold );
		};

		this.draw = function () {
			var spritePosition = this.position
				.clone()
				.subtract(new Victor(this.width / 2, this.height / 2));

			var sprite = (+Date.now() - this.happy < this.happyTime) ? sprites.shipActive : sprites.ship;

			ctx.save();
			ctx.translate(this.position.x, this.position.y);
			ctx.rotate(this.velocity.angle());
			ctx.translate(this.width / 2 * -1, this.height / 2 * -1);
			ctx.drawImage(sprite, 0, 0);
			ctx.restore();
		};

		setInterval(this.selectTarget.bind(this), 1000);
	}


	function start () {
		loadImages({
			ship: '../../assets/ship.png',
			shipActive: '../../assets/ship-active.png'
		}, function () {
			loop();
		});
	}

	function loop () {
		draw();
		move();
		raf(loop);
	}

	function move () {
		ship.move();
	}

	function draw () {
		ctx.clearRect(0, 0, canvasBottomRight.x, canvasBottomRight.y);
	//	ctx.fillRect(0, 0, canvasBottomRight.x, canvasBottomRight.y);
	//	ctx.clearRect(ship.position.x - ship.width, ship.position.y - ship.height, ship.width * 2, ship.height * 2);


		var i, len;
		ctx.save();
		for (i = 0, len = gold.length; i < len; i++) {
			ctx.beginPath();
			ctx.arc(gold[i].x, gold[i].y, 3, 0, 2 * Math.PI, false);
			ctx.shadowBlur = 5;
			ctx.shadowColor = '#ccff00';
			ctx.fillStyle = '#ffee6c';
			ctx.fill();
		}
		ctx.restore();


		ship.draw();
	}

	function random (min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}
