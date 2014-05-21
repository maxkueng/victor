var domready = require('domready');
var raf = require('raf');
var Victor = require('./victor');
var colors = require('./nicecolors');

exports = module.exports = animation;

function animation (el) {
	var canvas;
	var ctx;
	var canvasTopLeft;
	var canvasBottomRight;

	var padding = new Victor(20, 20);

	canvas = document.createElement('canvas');
	ctx = canvas.getContext('2d');

	domready(function () {
		el.appendChild(canvas);
		reset();

		window.addEventListener('resize', reset);
	});

	function reset () {
		var style = window.getComputedStyle(el, null);
		var width = parseInt(style.getPropertyValue('width'), 10);
		var paddingLeft = parseInt(style.getPropertyValue('padding-left'), 10);
		var paddingRight = parseInt(style.getPropertyValue('padding-right'), 10);

		var height = 260;
		width -= paddingLeft + paddingRight;

		canvasTopLeft = new Victor(0, 0);
		canvasBottomRight = new Victor(width, height);

		canvas.width = canvasBottomRight.x;
		canvas.height = canvasBottomRight.y;
		canvas.setAttribute('width', canvasBottomRight.x);
		canvas.setAttribute('height', canvasBottomRight.y);

		raf(draw);
	}

	function yy (val) {
		return canvasBottomRight.y - val - padding.y;
	}

	function xx (val) {
		return val + padding.x;
	}

	function drawYAxis () {
		var length = Math.round((canvasBottomRight.y - (padding.y * 2)) / 20) * 20;

		ctx.beginPath();
		ctx.moveTo(xx(0), yy(padding.y / 2 * -1));
		ctx.lineTo(xx(0), yy(length));

		for (i = 0; i < length; i += 20) {
			ctx.moveTo(xx(-3), yy(i));
			ctx.lineTo(xx(3), yy(i));
		}

		ctx.strokeStyle = colors.white;
		ctx.stroke();
	}

	function drawXAxis () {
		var i;
		var length = Math.round((canvasBottomRight.x - (padding.x * 2)) / 20) * 20;

		ctx.beginPath();
		ctx.moveTo(xx(padding.x / 2 * -1), yy(0));
		ctx.lineTo(xx(length), yy(0));

		for (i = 0; i < length; i += 20) {
			ctx.moveTo(xx(i), yy(-3));
			ctx.lineTo(xx(i), yy(3));
		}

		ctx.strokeStyle = colors.white;
		ctx.stroke();
	}

	var tl = new Victor(60, 80);
	var br = new Victor(240, 180);

	var rnd = [];

	setInterval(function () {
		var i;
		rnd = [];

		for (i = 0; i < 10; i++) {
			rnd.push(new Victor().randomize(tl, br));
		}

		raf(draw);
	}, 1000);

	function draw () {
		ctx.font = '13px sans-serif';

		ctx.fillStyle = colors.background;
		ctx.fillRect(0, 0, canvasBottomRight.x, canvasBottomRight.y);

		drawXAxis();
		drawYAxis();

		ctx.beginPath();
		ctx.rect(xx(tl.x), yy(tl.y), br.x - tl.x, (br.y - tl.y) * -1);
		ctx.strokeStyle = colors.brand;
		ctx.stroke();

		rnd.forEach(function (r) {
			ctx.beginPath();
			ctx.arc(xx(r.x), yy(r.y), 3, 0, Math.PI * 2, false);
			ctx.fillStyle = colors.blue;
			ctx.fill();
		});

		ctx.fillStyle = colors.white;
		ctx.fillText('10 random points within bounding rect', padding.x * 2, padding.y / 2);


		/*
		ctx.beginPath();
		ctx.arc(xx(0), yy(0), 120, (Math.PI * 2) - mouse.angle(), 0, false);
		ctx.strokeStyle = colors.pink;
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(xx(0), yy(0), 120, -Math.PI / 2, mouse.verticalAngle() - (Math.PI / 2), false);
		ctx.strokeStyle = colors.green;
		ctx.stroke();
		*/
	}



	function getScrollTop () {
		var body = document.body
		var docElem = document.documentElement
		return window.pageYOffset || docElem.scrollTop || body.scrollTop;
	}







}
