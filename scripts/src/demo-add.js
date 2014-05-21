var domready = require('domready');
var raf = require('raf');
var bean = require('bean');
var offset = require('offset');
var Victor = require('./victor');
var makeDrawArrow = require('./canvas-arrow');
var colors = require('./nicecolors');

exports = module.exports = animation;

function animation (el) {
	var canvas;
	var ctx;
	var canvasTopLeft;
	var canvasBottomRight;

	var padding = new Victor(20, 20);

	var mouse = new Victor(50, 50);

	canvas = document.createElement('canvas');
	ctx = canvas.getContext('2d');
	ctx.font = '12px sans-serif';

	var drawArrow = makeDrawArrow(ctx);

	domready(function () {
		el.appendChild(canvas);
		reset();

		window.addEventListener('resize', reset);

		canvas.addEventListener('mousemove', function (ev) {
			var rect = canvas.getBoundingClientRect();
			mouse.x = ev.clientX - rect.left - padding.x;
			mouse.y = canvasBottomRight.y - (ev.clientY - rect.top) - padding.y;
			raf(draw);
		});
	});

	function reset () {
		var style = window.getComputedStyle(el, null);
		var width = parseInt(style.getPropertyValue('width'), 10);
		var paddingLeft = parseInt(style.getPropertyValue('padding-left'), 10);
		var paddingRight = parseInt(style.getPropertyValue('padding-right'), 10);

		var height = 200;
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

	function drawVector (vector, color) {
		drawArrow(xx(0), yy(0), xx(vector.x), yy(vector.y), color);
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

	function draw () {
		ctx.fillStyle = colors.background;
		ctx.fillRect(0, 0, canvasBottomRight.x, canvasBottomRight.y);

		drawXAxis();
		drawYAxis();

		var vA = new Victor(100, 20);
		var vB = vA.clone().add(mouse);

		drawVector(vA, colors.blue);
		drawVector(mouse, colors.purple);
		drawVector(vB, colors.orange);

		ctx.fillStyle = colors.blue;
		ctx.fillText('A = x: 100, y: 20', padding.y, padding.x / 2);

		ctx.fillStyle = colors.purple;
		ctx.fillText('B = mouse', padding.y + 90, padding.x / 2);

		ctx.fillStyle = colors.orange;
		ctx.fillText('C = A.add( mouse ) = x: ' + Math.round(vB.x) + ', y: ' + Math.round(vB.y), padding.y + 155, padding.x / 2);
	}



	function getScrollTop () {
		var body = document.body
		var docElem = document.documentElement
		return window.pageYOffset || docElem.scrollTop || body.scrollTop;
	}







}
