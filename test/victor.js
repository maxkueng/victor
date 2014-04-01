var expect = require('chai').expect;
var Victor = require('../index');

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
		var vec, ret;

		before(function () {
			vec = new Victor(30, 20);
			ret = vec.divideX(2);
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
		var vec, ret;

		before(function () {
			vec = new Victor(30, 20);
			ret = vec.divideY(2);
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
		var vec, ret;

		before(function () {
			vec = new Victor(30, 20);
			ret = vec.divide(2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should divide both vector axis by 2', function () {
			expect(vec).to.have.property('x', 15);
			expect(vec).to.have.property('y', 10);
		});
	});

	describe('#multiplyX()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(30, 20);
			ret = vec.multiplyX(2);
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
		var vec, ret;

		before(function () {
			vec = new Victor(30, 20);
			ret = vec.multiplyY(2);
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
		var vec, ret;

		before(function () {
			vec = new Victor(30, 20);
			ret = vec.multiply(2);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should multiply both vector axis by 2', function () {
			expect(vec).to.have.property('x', 60);
			expect(vec).to.have.property('y', 40);
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
		var vec, ret;

		before(function () {
			vec = new Victor(30, 20);
			ret = vec.randomize(100, 200);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should randomize both vector axis and respect maxX and maxY', function () {
			expect(vec).to.have.property('x').that.is.most(100);
			expect(vec).to.have.property('y').that.is.most(200);
		});
	});

	describe('#randomizeX()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(30, 20);
			ret = vec.randomizeX(200);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should randomize only the X axis and recpect max', function () {
			expect(vec).to.have.property('x').that.is.most(200);
			expect(vec).to.have.property('y', 20);
		});
	});

	describe('#randomizeY()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(30, 20);
			ret = vec.randomizeY(200);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should randomize only the Y axis and recpect max', function () {
			expect(vec).to.have.property('x', 30);
			expect(vec).to.have.property('y').that.is.most(200);
		});
	});

	describe('#randomizeAny()', function () {
		var vec, ret;

		before(function () {
			vec = new Victor(30, 20);
			ret = vec.randomizeAny(100, 200);
		});

		it('should be chainable', function () {
			expect(ret).to.equal(vec);
		});

		it('should randomize both vector axis and respect maxX and maxY', function () {
			expect(vec).to.have.property('x').that.is.most(100);
			expect(vec).to.have.property('y').that.is.most(200);
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

});

describe('regular instance methods', function () {

	describe('#copy()', function () {
		var vec1, vec2;

		before(function () {
			vec1 = new Victor(42, 21);
			vec2 = vec1.copy();
		});

		it('should return a copy of a vector', function () {
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
