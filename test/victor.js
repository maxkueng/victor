var expect = require('chai').expect;
var Victor = require('../index');

var EPSILON = 0.0001;

describe('static methods', function () {

	describe('new Victor', function () {
		var x, y, vec1, vec2;

		before(function () {
			x = 100;
			y = 200;
			vec1 = new Victor(x, y);
			vec2 = Victor(x, y);
		});

		it('should be an instance of Victor', function () {
			expect(vec1).to.be.an.instanceof(Victor);
			expect(vec2).to.be.an.instanceof(Victor);
		});

		it('should have axis from arguments', function () {
			expect(vec1).to.have.property('x', x);
			expect(vec1).to.have.property('y', y);

			expect(vec2).to.have.property('x', x);
			expect(vec2).to.have.property('y', y);
		});
	});

	describe('#fromArray()', function () {
		var arr, vec;

		before(function () {
			arr = [100, 200];
			vec = Victor.fromArray(arr);
		});

		it('should return an instance of Victor', function () {
			expect(vec).to.be.an.instanceof(Victor);
		});

		it('should have axis from array', function () {
			expect(vec).to.have.property('x', arr[0]);
			expect(vec).to.have.property('y', arr[1]);
		});
	});

	describe('#fromObject()', function () {
		var obj, vec;

		before(function () {
			obj = { x: 100, y: 200 };
			vec = Victor.fromObject(obj);
		});

		it('should return an instance of Victor', function () {
			expect(vec).to.be.an.instanceof(Victor);
		});

		it('should have axis from object', function () {
			expect(vec).to.have.property('x', obj.x);
			expect(vec).to.have.property('y', obj.y);
		});
	});

});

describe('chainable instance methods', function () {

	describe('#addX()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Victor(20, 40);
			vec2 = new Victor(30, 20);
			ret = vec1.addX(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec1);
		});

		it('should add only the X axis of a vector', function () {
			expect(vec1).to.have.property('x', 50);
			expect(vec1).to.have.property('y', 40);
		});
	});

	describe('#addY()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Victor(20, 40);
			vec2 = new Victor(30, 20);
			ret = vec1.addY(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec1);
		});

		it('should add only the Y axis of a vector', function () {
			expect(vec1).to.have.property('x', 20);
			expect(vec1).to.have.property('y', 60);
		});
	});

	describe('#add()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Victor(20, 40);
			vec2 = new Victor(30, 20);
			ret = vec1.add(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec1);
		});

		it('should add a vector', function () {
			expect(vec1).to.have.property('x', 50);
			expect(vec1).to.have.property('y', 60);
		});
	});

	describe('#subtractX()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Victor(30, 20);
			vec2 = new Victor(20, 40);
			ret = vec1.subtractX(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec1);
		});

		it('should subtract only the X axis of a vector', function () {
			expect(vec1).to.have.property('x', 10);
			expect(vec1).to.have.property('y', 20);
		});
	});

	describe('#subtractY()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Victor(30, 20);
			vec2 = new Victor(20, 40);
			ret = vec1.subtractY(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec1);
		});

		it('should subtract only the Y axis of a vector', function () {
			expect(vec1).to.have.property('x', 30);
			expect(vec1).to.have.property('y', -20);
		});
	});

	describe('#subtract()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Victor(30, 20);
			vec2 = new Victor(20, 40);
			ret = vec1.subtract(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec1);
		});

		it('should subtract a vector', function () {
			expect(vec1).to.have.property('x', 10);
			expect(vec1).to.have.property('y', -20);
		});
	});

	describe('#divideX()', function () {
		var vec, vec2, ret;

		before(function () {
			vec = new Victor(30, 20);
			vec2 = new Victor(2, 2);
			ret = vec.divideX(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should divide the X axis by 2', function () {
			expect(vec).to.have.property('x', 15);
			expect(vec).to.have.property('y', 20);
		});
	});

	describe('#divideY()', function () {
		var vec, vec2, ret;

		before(function () {
			vec = new Victor(30, 20);
			vec2 = new Victor(2, 2);
			ret = vec.divideY(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should divide the Y axis by 2', function () {
			expect(vec).to.have.property('x', 30);
			expect(vec).to.have.property('y', 10);
		});
	});

	describe('#divide()', function () {
		var vec, vec2, ret;

		before(function () {
			vec = new Victor(30, 20);
			vec2 = new Victor(2, 2);
			ret = vec.divide(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should divide both vector axis by 2', function () {
			expect(vec).to.have.property('x', 15);
			expect(vec).to.have.property('y', 10);
		});
	});

	describe('#divideScalar()', function () {
		var vec, scal, ret;

		before(function () {
			vec = new Victor(30, 20);
			scal = 2;
			ret = vec.divideScalar(scal);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should divide both vector axis by 2', function () {
			expect(vec).to.have.property('x', 15);
			expect(vec).to.have.property('y', 10);
		});

		it('should return a zero vector when dividing by 0', function() {
			vec = new Victor(30, 20);
			scal = 0;
			ret = vec.divideScalar(scal);

			expect(vec).to.have.property('x', 0);
			expect(vec).to.have.property('y', 0);
		});
	});

	describe('#divideScalarX()', function () {
		var vec, scal, ret;

		before(function () {
			vec = new Victor(30, 20);
			scal = 2;
			ret = vec.divideScalarX(scal);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should divide the X axis by 2', function () {
			expect(vec).to.have.property('x', 15);
			expect(vec).to.have.property('y', 20);
		});

		it('should return a zero X when dividing by 0', function() {
			vec = new Victor(30, 20);
			scal = 0;
			ret = vec.divideScalarX(scal);

			expect(vec).to.have.property('x', 0);
		});
	});

	describe('#divideScalarY()', function () {
		var vec, scal, ret;

		before(function () {
			vec = new Victor(30, 20);
			scal = 2;
			ret = vec.divideScalarY(scal);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should divide the Y axis by 2', function () {
			expect(vec).to.have.property('x', 30);
			expect(vec).to.have.property('y', 10);
		});

		it('should return a zero Y when dividing by 0', function() {
			vec = new Victor(30, 20);
			scal = 0;
			ret = vec.divideScalarY(scal);

			expect(vec).to.have.property('y', 0);
		});
	});

	describe('#multiplyX()', function () {
		var vec, vec2, ret;

		before(function () {
			vec = new Victor(30, 20);
			vec2 = new Victor(2, 2);
			ret = vec.multiplyX(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should multiply the X axis by 2', function () {
			expect(vec).to.have.property('x', 60);
			expect(vec).to.have.property('y', 20);
		});
	});

	describe('#multiplyY()', function () {
		var vec, vec2, ret;

		before(function () {
			vec = new Victor(30, 20);
			vec2 = new Victor(2, 2);
			ret = vec.multiplyY(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should multiply the Y axis by 2', function () {
			expect(vec).to.have.property('x', 30);
			expect(vec).to.have.property('y', 40);
		});
	});

	describe('#multiply()', function () {
		var vec, vec2, ret;

		before(function () {
			vec = new Victor(30, 20);
			vec2 = new Victor(2, 2);
			ret = vec.multiply(vec2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should multiply both vector axis by 2', function () {
			expect(vec).to.have.property('x', 60);
			expect(vec).to.have.property('y', 40);
		});
	});

	describe('#multiplyScalar()', function () {
		var vec, scal, ret;

		before(function () {
			vec = new Victor(30, 20);
			scal = 2;
			ret = vec.multiplyScalar(scal);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should multiply both vector axis by 2', function () {
			expect(vec).to.have.property('x', 60);
			expect(vec).to.have.property('y', 40);
		});
	});

	describe('#multiplyScalarX()', function () {
		var vec, scal, ret;

		before(function () {
			vec = new Victor(30, 20);
			scal = 2;
			ret = vec.multiplyScalarX(scal);
		});

		it('should multiply the X axis by 2', function () {
			expect(vec).to.have.property('x', 60);
			expect(vec).to.have.property('y', 20);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});
	});

	describe('#multiplyScalarY()', function () {
		var vec, scal, ret;

		before(function () {
			vec = new Victor(30, 20);
			scal = 2;
			ret = vec.multiplyScalarY(scal);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should multiply the Y axis by 2', function () {
			expect(vec).to.have.property('x', 30);
			expect(vec).to.have.property('y', 40);
		});
	});

	describe('#addScalar()', function () {
		var vec, scalar, ret;

		before(function () {
			vec = new Victor(1, 2);
			scalar = 2;
			ret = vec.addScalar(scalar);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should add 2 to both vector axis', function () {
			expect(vec).to.have.property('x', 3);
			expect(vec).to.have.property('y', 4);
		});
	});

	describe('#addScalarX()', function () {
		var vec, scalar, ret;

		before(function () {
			vec = new Victor(1, 2);
			scalar = 2;
			ret = vec.addScalarX(scalar);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should add 2 to the x axis', function () {
			expect(vec).to.have.property('x', 3);
			expect(vec).to.have.property('y', 2);
		});
	});

	describe('#addScalarY()', function () {
		var vec, scalar, ret;

		before(function () {
			vec = new Victor(10, 20);
			scalar = 2;
			ret = vec.addScalarY(scalar);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should add 2 to the y axis', function () {
			expect(vec).to.have.property('x', 10);
			expect(vec).to.have.property('y', 22);
		});
	});

	describe('#subtractScalar()', function () {
		var vec, scalar, ret;

		before(function () {
			vec = new Victor(10, 20);
			scalar = 2;
			ret = vec.subtractScalar(scalar);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should subtract 2 from both vector axis', function () {
			expect(vec).to.have.property('x', 8);
			expect(vec).to.have.property('y', 18);
		});
	});

	describe('#subtractScalarX()', function () {
		var vec, scalar, ret;

		before(function () {
			vec = new Victor(10, 20);
			scalar = 2;
			ret = vec.subtractScalarX(scalar);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should subtract 2 from the x axis', function () {
			expect(vec).to.have.property('x', 8);
			expect(vec).to.have.property('y', 20);
		});
	});

	describe('#subtractScalarY()', function () {
		var vec, scalar, ret;

		before(function () {
			vec = new Victor(10, 20);
			scalar = 2;
			ret = vec.subtractScalarY(scalar);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should add 2 to the y axis', function () {
			expect(vec).to.have.property('x', 10);
			expect(vec).to.have.property('y', 18);
		});
	});

	describe('#norm()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(13.37, 42.42);
			ret = vec.norm();
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it.skip('should?', function () {
			expect(vec).to.have.property('x');
			expect(vec).to.have.property('y');
		});
	});

	describe('#limit()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(30, 20);
			ret = vec.limit(20, 0.5);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should limit both vector axis by limit', function () {
			expect(vec).to.have.property('x', 15);
			expect(vec).to.have.property('y', 20);
		});
	});

	describe('#randomize()', function () {
		var topLeft = new Victor(-50, 100);
		var bottomRight = new Victor(300, -500);

		it('should be chainable', function () {
			var vec = new Victor(30, 20);
			expect(vec.randomize(topLeft, bottomRight)).to.equal(vec);
		});

		it('should randomize both vector axis and respect the boundaries', function () {
			var i, count = 100;
			var vec = new Victor(30, 20);

			var minX = Math.min(topLeft.x, bottomRight.x);
			var maxX = Math.max(topLeft.x, bottomRight.x);
			var minY = Math.min(topLeft.y, bottomRight.y);
			var maxY = Math.max(topLeft.y, bottomRight.y);

			for (i = 0; i < count; i++) {
				vec.randomize(topLeft, bottomRight);

				expect(vec.x).to.be.within(minX, maxX);
				expect(vec.y).to.be.within(minY, maxY);
			}
		});
	});

	describe('#randomizeX()', function () {
		var topLeft = new Victor(-50, 100);
		var bottomRight = new Victor(300, -500);

		it('should be chainable', function () {
			var vec = new Victor(30, 20);
			expect(vec.randomizeX(topLeft, bottomRight)).to.equal(vec);
		});

		it('should randomize only the X axis and respect the boundaries', function () {
			var i, count = 100;
			var vec = new Victor(30, 20);

			var y = vec.y;
			var minX = Math.min(topLeft.x, bottomRight.x);
			var maxX = Math.max(topLeft.x, bottomRight.x);

			for (i = 0; i < count; i++) {
				vec.randomizeX(topLeft, bottomRight);

				expect(vec).to.have.property('x')
					.that.is.within(minX, maxX);

				expect(vec).to.have.property('y', y);
			}
		});
	});

	describe('#randomizeY()', function () {
		var topLeft = new Victor(-50, 100);
		var bottomRight = new Victor(300, -500);

		it('should be chainable', function () {
			var vec = new Victor(30, 20);
			expect(vec.randomizeY(topLeft, bottomRight)).to.equal(vec);
		});

		it('should randomize only the X axis and respect the boundaries', function () {
			var i, count = 100;
			var vec = new Victor(30, 20);

			var x = vec.x;
			var minY = Math.min(topLeft.y, bottomRight.y);
			var maxY = Math.max(topLeft.y, bottomRight.y);

			for (i = 0; i < count; i++) {
				vec.randomizeY(topLeft, bottomRight);

				expect(vec).to.have.property('y')
					.that.is.within(minY, maxY);

				expect(vec).to.have.property('x', x);
			}
		});
	});

	describe('#randomizeAny()', function () {
		var topLeft = new Victor(100, 100);
		var bottomRight = new Victor(300, 300);

		it('should be chainable', function () {
			var vec = new Victor(30, 20);
			expect(vec.randomizeAny(topLeft, bottomRight)).to.equal(vec);
		});

		it('should randomize only one vector axis and respect the boundaries', function () {
			var vec, i, count = 100, originX = 50, originY = 50;

			var minX = Math.min(topLeft.x, bottomRight.x);
			var maxX = Math.max(topLeft.x, bottomRight.x);
			var minY = Math.min(topLeft.y, bottomRight.y);
			var maxY = Math.max(topLeft.y, bottomRight.y);

			for (i = 0; i < count; i++) {
				vec = new Victor(originX, originY);
				vec.randomizeAny(topLeft, bottomRight);

				if (vec.x !== originX) {
					expect(vec).to.have.property('x')
						.that.is.within(minX, maxX);
					expect(vec).to.have.property('y', originY);

				} else {
					expect(vec).to.have.property('y')
						.that.is.within(minY, maxY);
					expect(vec).to.have.property('x', originX);
				}
			}
		});
	});

	describe('#unfloat()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(30.333, 20.666);
			ret = vec.unfloat();
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should round both vector axis to integers', function () {
			expect(vec).to.have.property('x', 30);
			expect(vec).to.have.property('y', 21);
		});
	});

	describe('#mixX()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Victor(100, 100);
			vec2 = new Victor(200, 200);
			ret = vec1.mixX(vec2, 0.5);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec1);
		});

		it('should interpolate the X axis half way', function () {
			expect(vec1).to.have.property('x', 150);
			expect(vec1).to.have.property('y', 100);
		});
	});

	describe('#mixY()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Victor(100, 100);
			vec2 = new Victor(200, 200);
			ret = vec1.mixY(vec2, 0.5);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec1);
		});

		it('should interpolate the Y axis half way', function () {
			expect(vec1).to.have.property('x', 100);
			expect(vec1).to.have.property('y', 150);
		});
	});

	describe('#mix()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Victor(100, 100);
			vec2 = new Victor(200, 200);
			ret = vec1.mix(vec2, 0.5);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec1);
		});

		it('should interpolate half way', function () {
			expect(vec1).to.have.property('x', 150);
			expect(vec1).to.have.property('y', 150);
		});
	});

	describe('#zero()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(100, 100);
			ret = vec.zero();
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should interpolate half way', function () {
			expect(vec).to.have.property('x', 0);
			expect(vec).to.have.property('y', 0);
		});
	});

	describe('#horizontalAngle()', function(){

		var angleX,angleY;
		before(function(){
			angleX = new Victor(100,0).horizontalAngle();
			angleY = new Victor(0,100).horizontalAngle();
			angleXPi = new Victor(-100,0).horizontalAngle();
		});

		it('should x directed vector to 0°', function(){
			expect(Math.abs(angleX - 0)).to.lte(0,EPSILON);
		});

		it('should y directed vector to 90°', function(){
			expect(Math.abs(angleY - Math.PI/2)).to.lte(EPSILON);
		});

		it('should negative x directed vector to 180°', function(){
			expect(Math.abs(angleXPi - Math.PI)).to.lte(EPSILON);
		});
	});

	describe('#rotate()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(100, 100);
			ret = vec.rotate(90 * Math.PI / 180);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should rotate the vector by certain degrees', function () {
			expect(vec).to.have.property('x', -100);
			expect(vec).to.have.property('y', 100);
			expect(Math.abs(vec.horizontalAngle() - 135 * Math.PI / 180)).to.lte(EPSILON);
		});
	});


	describe('#rotateDeg()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(100, 100);
			ret = vec.rotateDeg(90);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should set the rotation angle in degrees', function () {
			expect(vec).to.have.property('x', -100);
			expect(vec).to.have.property('y', 100);
		});
	});


	describe('#rotateTo()', function(){
		var vecX,vecY, retX, retY;


		before(function(){
			vecX = new Victor(100,0);
			vecY = new Victor(0,100);
			retX = vecX.rotateTo(120 * Math.PI / 180);
			retY = vecY.rotateTo(120 * Math.PI / 180);
		});

		it('should be chainable', function(){
			expect(retX).to.equal(vecX);
		});

		it('should rotate any Vector to a given angle', function(){
			expect(vecX.angle()).to.equal(120 * Math.PI /180);
			expect(vecY.angle()).to.equal(120 * Math.PI /180);
		});

		it('should keep the length', function(){
			expect(retX.length()).to.equal(100);
			expect(retY.length()).to.equal(100);
		});

	});

	describe('#rotateToDeg()', function(){
		var vec,ret;
		before(function(){
			vec = new Victor(100,0);

			ret = vec.rotateToDeg(120);

		});

		it('should be chainable', function(){
			expect(ret).to.equal(vec);
		});

		it('should rotate any Vector to a given angle', function(){
			expect(Math.abs(vec.angleDeg()-120)).to.lte(EPSILON);

		});

		it('should keep the length', function(){
			expect(ret.length()).to.equal(100);

		});

	});

	describe('#rotateBy()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(100, 100);
			ret = vec.rotateBy(45 * Math.PI / 180);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should rotate by the given angle', function () {
			expect(vec).to.have.property('x', -100);
			expect(vec).to.have.property('y', 100);
		});
	});

	describe('#rotateByDeg()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(100, 100);
			ret = vec.rotateByDeg(45);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should rotate by the given angle in degrees', function () {
			expect(vec).to.have.property('x', -100);
			expect(vec).to.have.property('y', 100);
		});
	});

    describe('#projectOnto()', function () {
		var vec1, vec2, var3, selfRet, perpRet, paraRet, middleRet;

		before(function () {
			vec1 = new Victor(100, 0);
			vec2 = new Victor(100, 100);
            vec3 = new Victor(0,100);
            vec4 = new Victor(200,0);
            selfRet = vec1.projectOnto(vec1);
			perpRet = vec1.clone().projectOnto(vec3);
            paraRet = vec1.clone().projectOnto(vec4);
            middleRet = vec1.clone().projectOnto(vec2);
		});

        it('should be chainable', function () {
			expect(selfRet).to.equal(vec1);
		});

        it('should project same vector onto itself without change', function() {
            expect(selfRet).to.have.property('x',100);
            expect(selfRet).to.have.property('y',0);
        });

		it('should project orthogonal vectors into a zero-length vector', function () {
            expect(perpRet).to.have.property('x',0);
            expect(perpRet).to.have.property('y',0);
		});

        it('shuld project parallel vectors into a vector of same direction and magnitude', function () {
            expect(paraRet).to.have.property('x', 100);
            expect(paraRet).to.have.property('y', 0);
        });

		it('should project non-orthogonal non-parallel vectors correctly', function () {
			expect(middleRet).to.have.property('x', 50);
			expect(middleRet).to.have.property('y', 50);
		});
	});
});

describe('regular instance methods', function () {

	describe('#clone()', function () {
		var vec1, vec2;

		before(function () {
			vec1 = new Victor(42, 21);
			vec2 = vec1.clone();
		});

		it('should return a clone of a vector', function () {
			expect(vec2).to.be.an.instanceof(Victor);
			expect(vec2).to.not.equal(vec1);
		});

		it('should have the same values as the original', function () {
			expect(vec1.x).to.equal(vec2.x);
			expect(vec1.y).to.equal(vec2.y);
		});
	});

	describe('#dot()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Victor(42, 21);
			vec2 = new Victor(44, 42);
			ret = vec1.dot(vec2);
		});

		it('should return the dot product of 2 vectors', function () {
			expect(ret).to.equal(2730);
		});
	});

	describe('#distanceX()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Victor(42, 21);
			vec2 = new Victor(44, 42);
			ret = vec1.distanceX(vec2);
		});

		it('should return the distance between the X axis of 2 vectors', function () {
			expect(ret).to.equal(-2);
		});
	});

	describe('#distanceY()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Victor(42, 21);
			vec2 = new Victor(44, 42);
			ret = vec1.distanceY(vec2);
		});

		it('should return the distance between the Y axis of 2 vectors', function () {
			expect(ret).to.equal(-21);
		});
	});

	describe.skip('#distance()', function () {
		var vec1, vec2, ret;

		before(function () {
			vec1 = new Victor(100, 100);
			vec2 = new Victor(200, 100);
			ret = vec1.distance(vec2);
		});

		it('should return the euclidean distance between 2 vectors', function () {
			expect(ret).to.equal(-21);
		});
	});

	describe('#length()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(100, 100);
			ret = vec.length();
		});

		it('should return the length of the vector', function () {
			expect(Math.round(ret)).to.equal(141);
		});
	});

    describe('#setLength()', function () {
        var vec, x, y;

        before(function () {
            vec = new Victor(100, 50);
            vec.setLength(120);
            x = vec.x;
            y = vec.y;
        });

        it('should return the length of the vector', function () {
            expect(Math.round(x)).to.equal(107);
            expect(Math.round(y)).to.equal(54);
        });
    });

    describe('#addLength()', function () {
        var vec, x, y;

        before(function () {
            vec = new Victor(100, 50);
            vec.addLength(10);
            x = vec.x;
            y = vec.y;
        });

        it('should return the length of the vector', function () {
            expect(Math.round(x)).to.equal(109);
            expect(Math.round(y)).to.equal(54);
        });
    });

	describe('#isZero()', function () {
		var vec;

		before(function () {
			vec = new Victor(100, 100);
			vec.zero();
		});

		it('should return true if the vector is zero', function () {
			expect(vec.isZero()).to.equal(true);
		});
	});

	describe('#isEqualTo()', function () {
		var vec1, vec2, vec3;

		before(function () {
			vec1 = new Victor(100, 100);
			vec2 = new Victor(100, 120);
			vec3 = new Victor(100, 120);
		});

		it('should return false if the vectors are not the same', function () {
			expect(vec1.isEqualTo(vec2)).to.equal(false);
		});
		it('should return true if the vectors are the same', function () {
			expect(vec2.isEqualTo(vec3)).to.equal(true);
		});
	});

});

describe('utility methods', function () {

	describe('#toString()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(100, 200);
			ret = vec.toString();
		});

		it('should return a string representation of the vector', function () {
			expect(ret).to.be.a('string');
			expect(ret).to.have.string('x:100, y:200');
		});
	});

	describe('#toArray()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(100, 200);
			ret = vec.toArray();
		});

		it('should return an array representation of the vector', function () {
			expect(ret).to.be.instanceof(Array);
			expect(ret).to.eql([ 100, 200 ]);
		});
	});

	describe('#toObject()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(100, 200);
			ret = vec.toObject();
		});

		it('should return an object representation of the vector', function () {
			expect(ret).to.be.instanceof(Object);
			expect(ret).to.eql({ x: 100, y: 200 });
		});
	});
});
