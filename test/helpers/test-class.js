import { assert } from 'chai';
import { describe, it } from 'mocha';

export default function testClass(Victor, description, extraChecks = []) {
  function runExtraChecks(...args) {
    extraChecks.forEach((check) => {
      check(...args);
    });
  }

  describe(description, () => {
    describe('instance', () => {
      describe('constructor', () => {
        it('should initialize vector components with 0', () => {
          const v1 = new Victor();
          assert.equal(v1.x, 0);
          assert.equal(v1.y, 0);
        });

        it('should initialize vector components with x and y arguments', () => {
          const v1 = new Victor(123, 456);
          assert.equal(v1.x, 123);
          assert.equal(v1.y, 456);
        });
      });

      describe('setX()', () => {
        it('should set the x component', () => {
          const v1 = new Victor(100, 200);
          const res = v1.setX(42);

          assert.equal(res.x, 42);
          assert.equal(res.y, 200);

          runExtraChecks(v1, res);
        });
      });

      describe('setY()', () => {
        it('should set the y component', () => {
          const v1 = new Victor(100, 200);
          const res = v1.setY(42);

          assert.equal(res.x, 100);
          assert.equal(res.y, 42);

          runExtraChecks(v1, res);
        });
      });

      describe('add()', () => {
        it('should do an addition of both vector components', () => {
          const v1 = new Victor(100, 200);
          const v2 = new Victor(300, 400);
          const res = v1.add(v2);

          assert.equal(res.x, 400);
          assert.equal(res.y, 600);

          runExtraChecks(v1, res);
        });
      });

      describe('addX()', () => {
        it('should do an addition of the x component', () => {
          const v1 = new Victor(100, 200);
          const v2 = new Victor(300, 400);
          const res = v1.addX(v2);

          assert.equal(res.x, 400);
          assert.equal(res.y, 200);

          runExtraChecks(v1, res);
        });
      });

      describe('addY()', () => {
        it('should do an addition of the y component', () => {
          const v1 = new Victor(100, 200);
          const v2 = new Victor(300, 400);
          const res = v1.addY(v2);

          assert.equal(res.x, 100);
          assert.equal(res.y, 600);

          runExtraChecks(v1, res);
        });
      });

      describe('subtract()', () => {
        it('should do a subtraction of both vector components', () => {
          const v1 = new Victor(500, 600);
          const v2 = new Victor(300, 100);
          const res = v1.subtract(v2);

          assert.equal(res.x, 200);
          assert.equal(res.y, 500);

          runExtraChecks(v1, res);
        });
      });

      describe('subtractX()', () => {
        it('should do a subtraction of the x component', () => {
          const v1 = new Victor(500, 600);
          const v2 = new Victor(300, 100);
          const res = v1.subtractX(v2);

          assert.equal(res.x, 200);
          assert.equal(res.y, 600);

          runExtraChecks(v1, res);
        });
      });

      describe('subtractY()', () => {
        it('should do a subtraction of the y component', () => {
          const v1 = new Victor(500, 600);
          const v2 = new Victor(300, 100);
          const res = v1.subtractY(v2);

          assert.equal(res.x, 500);
          assert.equal(res.y, 500);

          runExtraChecks(v1, res);
        });
      });

      describe('distance()', () => {
        it('should return the distance to another vector', () => {
          const v1 = new Victor(100, 50);
          const v2 = new Victor(200, 70);
          const res = v1.distance(v2);

          assert.approximately(res, 101.9, 0.1);
        });
      });

      describe('distanceSquared()', () => {
        it('should return the squared distance to another vector', () => {
          const v1 = new Victor(100, 100);
          const v2 = new Victor(100, 200);
          const res = v1.distanceSquared(v2);

          assert.approximately(res, 10000, 0.1);
        });
      });

      describe('toObject()', () => {
        it('should return an object with its x and y components', () => {
          const x = 123;
          const y = 456;

          const v1 = new Victor(x, y);
          const res = v1.toObject();

          assert.isObject(res);
          assert.deepEqual(res, { x, y });
        });
      });

      describe('toArray()', () => {
        it('should return an array with its x and y components', () => {
          const x = 123;
          const y = 456;

          const v1 = new Victor(x, y);
          const res = v1.toArray();

          assert.isArray(res);
          assert.deepEqual(res, [x, y]);
        });
      });

      describe('toString()', () => {
        it('should return a string representing its x and y components', () => {
          const x = 123;
          const y = 456;

          const v1 = new Victor(x, y);
          const res = v1.toString();

          assert.isString(res);
          assert.equal(res, `x:${x}, y:${y}`);
        });
      });
    });

    describe('static', () => {
      describe('fromObject()', () => {
        it('should create an instance form an object', () => {
          const x = 123;
          const y = 456;

          const v1 = Victor.fromObject({ x, y });

          assert.instanceOf(v1, Victor);
          assert.equal(v1.x, x);
          assert.equal(v1.y, y);
        });
      });

      describe('fromArray()', () => {
        it('should create an instance form an array', () => {
          const x = 123;
          const y = 456;

          const v1 = Victor.fromArray([x, y]);

          assert.instanceOf(v1, Victor);
          assert.equal(v1.x, x);
          assert.equal(v1.y, y);
        });
      });
    });
  });
}