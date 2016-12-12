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

      describe('set()', () => {
        it('should set the x and y component', () => {
          const v1 = new Victor(100, 200);
          const res = v1.set(42, 24);

          assert.equal(res.x, 42);
          assert.equal(res.y, 24);

          runExtraChecks(v1, res);
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

      describe('multiply()', () => {
        it('should do a multiplication of both vector components', () => {
          const v1 = new Victor(500, 600);
          const v2 = new Victor(3, 10);
          const res = v1.multiply(v2);

          assert.equal(res.x, 1500);
          assert.equal(res.y, 6000);

          runExtraChecks(v1, res);
        });
      });

      describe('multiplyX()', () => {
        it('should do a multiplication of the x component', () => {
          const v1 = new Victor(500, 600);
          const v2 = new Victor(3, 10);
          const res = v1.multiplyX(v2);

          assert.equal(res.x, 1500);
          assert.equal(res.y, 600);

          runExtraChecks(v1, res);
        });
      });

      describe('multiplyY()', () => {
        it('should do a multiplication of the y component', () => {
          const v1 = new Victor(500, 600);
          const v2 = new Victor(3, 10);
          const res = v1.multiplyY(v2);

          assert.equal(res.x, 500);
          assert.equal(res.y, 6000);

          runExtraChecks(v1, res);
        });
      });

      describe('divide()', () => {
        it('should do a division of both vector components', () => {
          const v1 = new Victor(500, 600);
          const v2 = new Victor(5, 10);
          const res = v1.divide(v2);

          assert.equal(res.x, 100);
          assert.equal(res.y, 60);

          runExtraChecks(v1, res);
        });
      });

      describe('divideX()', () => {
        it('should do a division of the x component', () => {
          const v1 = new Victor(500, 600);
          const v2 = new Victor(5, 10);
          const res = v1.divideX(v2);

          assert.equal(res.x, 100);
          assert.equal(res.y, 600);

          runExtraChecks(v1, res);
        });
      });

      describe('divideY()', () => {
        it('should do a division of the y component', () => {
          const v1 = new Victor(500, 600);
          const v2 = new Victor(5, 10);
          const res = v1.divideY(v2);

          assert.equal(res.x, 500);
          assert.equal(res.y, 60);

          runExtraChecks(v1, res);
        });
      });

      describe('invert()', () => {
        it('should invert the components', () => {
          const v1 = new Victor(500, 600);
          const res = v1.invert();

          assert.equal(res.x, -500);
          assert.equal(res.y, -600);

          runExtraChecks(v1, res);
        });
      });

      describe('invertX()', () => {
        it('should invert the x component', () => {
          const v1 = new Victor(500, 600);
          const res = v1.invertX();

          assert.equal(res.x, -500);
          assert.equal(res.y, 600);

          runExtraChecks(v1, res);
        });
      });

      describe('invertY()', () => {
        it('should invert the y component', () => {
          const v1 = new Victor(500, 600);
          const res = v1.invertY();

          assert.equal(res.x, 500);
          assert.equal(res.y, -600);

          runExtraChecks(v1, res);
        });
      });

      describe('normalize()', () => {
        it('should normalize the vector', () => {
          const v1 = new Victor(500, 600);
          const res = v1.normalize();

          assert.equal(res.length(), 1);

          runExtraChecks(v1, res);
        });
      });

      describe('setLength()', () => {
        it('should set the length of the vector', () => {
          const v1 = new Victor(500, 600);
          const res = v1.setLength(10);

          assert.equal(res.length(), 10);

          runExtraChecks(v1, res);
        });
      });

      describe('randomize()', () => {
        it('should randomize both components of the vector', () => {
          const bottomLeft = new Victor(1000, 1000);
          const topRight = new Victor(2000, 2000);
          const v1 = new Victor(500, 600);
          const res = v1.randomize(bottomLeft, topRight, Math.random);

          assert.notEqual(res.x, 500);
          assert.notEqual(res.y, 600);

          runExtraChecks(v1, res);
        });
      });

      describe('randomizeX()', () => {
        it('should randomize x component of the vector', () => {
          const bottomLeft = new Victor(1000, 1000);
          const topRight = new Victor(2000, 2000);
          const v1 = new Victor(500, 600);
          const res = v1.randomizeX(bottomLeft, topRight, Math.random);

          assert.notEqual(res.x, 500);
          assert.equal(res.y, 600);

          runExtraChecks(v1, res);
        });
      });

      describe('randomizeY()', () => {
        it('should randomize y component of the vector', () => {
          const bottomLeft = new Victor(1000, 1000);
          const topRight = new Victor(2000, 2000);
          const v1 = new Victor(500, 600);
          const res = v1.randomizeY(bottomLeft, topRight, Math.random);

          assert.equal(res.x, 500);
          assert.notEqual(res.y, 600);

          runExtraChecks(v1, res);
        });
      });

      describe('addLength()', () => {
        it('should add length to the vector', () => {
          const v1 = new Victor(500, 600);
          const v1Length = v1.length();
          const res = v1.addLength(10);

          assert.equal(res.length(), v1Length + 10);

          runExtraChecks(v1, res);
        });
      });

      describe('dot()', () => {
        it('should return the dot product', () => {
          const v1 = new Victor(10, 20);
          const v2 = new Victor(250, 160);
          const res = v1.dot(v2);

          assert.equal(res, 5700);
        });
      });

      describe('cross()', () => {
        it('should return the cross product', () => {
          const v1 = new Victor(10, 20);
          const v2 = new Victor(60, 80);
          const res = v1.cross(v2);

          assert.equal(res, -400);
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

      describe('distanceX()', () => {
        it('should return the distance of the x components to another vector', () => {
          const v1 = new Victor(100, 50);
          const v2 = new Victor(200, 70);
          const res = v1.distanceX(v2);

          assert.equal(res, 100);
        });
      });

      describe('distanceY()', () => {
        it('should return the distance of the y components to another vector', () => {
          const v1 = new Victor(100, 50);
          const v2 = new Victor(200, 70);
          const res = v1.distanceY(v2);

          assert.equal(res, 20);
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

      describe('length()', () => {
        it('should return the length', () => {
          const v1 = new Victor(100, 100);
          const res = v1.length();

          assert.approximately(res, 141.42135623, 0.00000001);
        });
      });

      describe('lengthSquared()', () => {
        it('should return the squared length', () => {
          const v1 = new Victor(100, 100);
          const res = v1.lengthSquared();

          assert.equal(res, 20000);
        });
      });

      describe('horizontalAngle()', () => {
        it('should return the horizontal angle', () => {
          const v1 = new Victor(100, 100);
          const res = v1.horizontalAngle();

          assert.equal(res, Math.PI / 4);
        });
      });

      describe('horizontalAngleDeg()', () => {
        it('should return the horizontal angle in degrees', () => {
          const v1 = new Victor(100, 100);
          const res = v1.horizontalAngleDeg();

          assert.equal(res, 45);
        });
      });

      describe('verticalAngle()', () => {
        it('should return the vertical angle', () => {
          const v1 = new Victor(100, 100);
          const res = v1.verticalAngle();

          assert.equal(res, Math.PI / 4);
        });
      });

      describe('verticalAngleDeg()', () => {
        it('should return the vertical angle in degrees', () => {
          const v1 = new Victor(100, 100);
          const res = v1.verticalAngleDeg();

          assert.equal(res, 45);
        });
      });

      describe('angleBetween()', () => {
        it('should return the angle between this and another vector', () => {
          const v1 = new Victor(100, 100);
          const v2 = new Victor(100, 0);
          const res = v1.angleBetween(v2);

          assert.equal(res, Math.PI / 4);
        });
      });

      describe('angleBetweenDeg()', () => {
        it('should return the angle in degrees between this and another vector', () => {
          const v1 = new Victor(100, 100);
          const v2 = new Victor(100, 0);
          const res = v1.angleBetweenDeg(v2);

          assert.equal(res, 45);
        });
      });

      describe('isLeftOf()', () => {
        it('should return true if is left of another vector', () => {
          const v1 = new Victor(100, 100);
          const v2 = new Victor(200, 300);

          assert.isTrue(v1.isLeftOf(v2));
          assert.isFalse(v2.isLeftOf(v1));
        });
      });

      describe('isRightOf()', () => {
        it('should return true if is right of another vector', () => {
          const v1 = new Victor(100, 100);
          const v2 = new Victor(200, 300);

          assert.isFalse(v1.isRightOf(v2));
          assert.isTrue(v2.isRightOf(v1));
        });
      });

      describe('isAbove()', () => {
        it('should return true if is above another vector', () => {
          const v1 = new Victor(100, 100);
          const v2 = new Victor(200, 300);

          assert.isFalse(v1.isAbove(v2));
          assert.isTrue(v2.isAbove(v1));
        });
      });

      describe('isBelow()', () => {
        it('should return true if is below another vector', () => {
          const v1 = new Victor(100, 100);
          const v2 = new Victor(200, 300);

          assert.isTrue(v1.isBelow(v2));
          assert.isFalse(v2.isBelow(v1));
        });
      });

      describe('isBelow()', () => {
        it('should return true if is within the bounds of two vectors', () => {
          const bottomLeft = new Victor(-100, -50);
          const topRight = new Victor(300, 400);

          const v1 = new Victor(-50, 100);
          const v2 = new Victor(100, -55);
          const v3 = new Victor(100, -25);

          assert.isTrue(v1.isWithin(bottomLeft, topRight));
          assert.isFalse(v2.isWithin(bottomLeft, topRight));
          assert.isTrue(v3.isWithin(bottomLeft, topRight));
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

      describe('radiansToDegrees()', () => {
        it('should convert radians to degrees', () => {
          assert.equal(Victor.radiansToDegrees(Math.PI), 180);
          assert.equal(Victor.radiansToDegrees(Math.PI * 2), 360);
        });
      });

      describe('degreesToRadians()', () => {
        it('should convert degrees to radians', () => {
          assert.equal(Victor.degreesToRadians(180), Math.PI);
          assert.equal(Victor.degreesToRadians(360), Math.PI * 2);
        });
      });
    });
  });
}
