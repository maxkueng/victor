exports = module.exports = drawArrow;

// This was borrowed from
//  - http://deepliquid.com/blog/archives/98
//  - http://deepliquid.com/projects/blog/arrows2.html

function drawArrow (ctx) {
	var arrow_shape = [
		[ -10, -4 ],
		[ -8, 0 ],
		[ -10, 4 ],
		[ 2, 0 ]
	];

	function drawLineArrow(ctx, x1, y1, x2, y2) {
		ctx.beginPath();
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.stroke();
		var ang = Math.atan2(y2 - y1, x2 - x1);
		drawFilledPolygon(ctx, translateShape(rotateShape(arrow_shape, ang), x2, y2));
	}

	return function (x1, y1, x2, y2, color) {
		ctx.save();
		ctx.strokeStyle = color;
		ctx.fillStyle = color;
		drawLineArrow(ctx, x1, y1, x2, y2);
		ctx.restore();
	}
}

function drawFilledPolygon (ctx, shape) {
	ctx.beginPath();
	ctx.moveTo(shape[0][0], shape[0][1]);

	for (p in shape) {
		if (p > 0) ctx.lineTo(shape[p][0], shape[p][1]);
	}

	ctx.lineTo(shape[0][0], shape[0][1]);
	ctx.fill();
}

function translateShape (shape, x, y) {
	var rv = [];
	for (p in shape) {
		rv.push([ shape[p][0] + x, shape[p][1] + y ]);
	}
	return rv;
}

function rotateShape (shape, ang) {
	var rv = [];
	for (p in shape) {
		rv.push(rotatePoint(ang,shape[p][0], shape[p][1]));
	}
	return rv;
}

function rotatePoint (ang, x, y) {
	return [
		(x * Math.cos(ang)) - (y * Math.sin(ang)),
		(x * Math.sin(ang)) + (y * Math.cos(ang))
	];
}
