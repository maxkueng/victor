var expect = require('chai').expect;
var Victor = require('../index');

describe('static methods', function () {

	describe('#add()', function () {
		var vec1, vec2, vec3;

		before(function () {
			vec1 = new Victor(20, 40);
			vec2 = new Victor(30, 20);
			vec3 = Victor.add(vec1, vec2);
		});

		it('should return an instance of Victor', function () {
			expect(vec3).to.be.an.instanceof(Victor);
		});

		it('should add 2 vectors', function () {
			expect(vec3).to.have.property('x', 50);
			expect(vec3).to.have.property('y', 60);
		});
	});

});

describe('instance methods', function () {

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

		it('should have the same values', function () {
			expect(vec1.x).to.equal(vec2.x);
			expect(vec1.y).to.equal(vec2.y);
		})

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

		it('should add a vector to another', function () {
			expect(vec1).to.have.property('x', 50);
			expect(vec1).to.have.property('y', 60);
		});
	});

});
