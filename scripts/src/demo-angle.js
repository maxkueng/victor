var domready = require('domready');
var raf = require('raf');
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

	var mouse = new Victor(200, 0);
	mouse.rotate(Math.PI / 2 / 3);

	canvas = document.createElement('canvas');
	ctx = canvas.getContext('2d');

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
		ctx.font = '13px sans-serif';

		ctx.fillStyle = colors.background;
		ctx.fillRect(0, 0, canvasBottomRight.x, canvasBottomRight.y);

		drawXAxis();
		drawYAxis();

		drawVector(mouse, colors.purple);

		ctx.beginPath();
		ctx.arc(xx(0), yy(0), 120, (Math.PI * 2) - mouse.angle(), 0, false);
		ctx.strokeStyle = colors.pink;
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(xx(0), yy(0), 120, -Math.PI / 2, mouse.verticalAngle() - (Math.PI / 2), false);
		ctx.strokeStyle = colors.green;
		ctx.stroke();

		var vAlphaLabel = new Victor(60, 0);
		vAlphaLabel.rotate(mouse.angle() / 2);
		ctx.fillStyle = colors.pink;
		ctx.fillText('α', xx(vAlphaLabel.x), yy(vAlphaLabel.y));

		var vBetaLabel = new Victor(0, 60);
		vBetaLabel.rotate(mouse.verticalAngle() / 2 * -1);
		ctx.fillStyle = colors.green;
		ctx.fillText('β', xx(vBetaLabel.x), yy(vBetaLabel.y));

		ctx.fillStyle = colors.pink;
		var alphaDeg = Math.round(mouse.angleDeg() * 100) / 100;
		var alphaRad = Math.round(mouse.angle() * 10000) / 10000;
		ctx.fillText('α = horizontal angle = ' + alphaDeg + '° = ' + alphaRad + ' rad', padding.x * 2, padding.y / 2);

		ctx.fillStyle = colors.green;
		var betaDeg = Math.round(mouse.verticalAngleDeg() * 100) / 100;
		var betaRad = Math.round(mouse.verticalAngle() * 10000) / 10000;
		ctx.fillText('β = vertical angle = ' + betaDeg + '° = ' + betaRad + ' rad', padding.x * 2, (padding.y / 2) + 15);
	}



	function getScrollTop () {
		var body = document.body
		var docElem = document.documentElement
		return window.pageYOffset || docElem.scrollTop || body.scrollTop;
	}







}
