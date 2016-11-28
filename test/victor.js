import Immutable from '../src/immutable';
import Mutable from '../src/mutable';
import * as lib from '../src/lib'
import {assert} from 'chai';

const Victor = Immutable;

describe('immutable', () => {

  it('should not mutate and return a new instance', () => {

    const v1 = new Immutable(100, 200);
    const v2 = new Immutable(300, 400);
    const res = v1.add(v2);

    assert.equal(res.x, 400);
    assert.equal(res.y, 600);

    assert.equal(v1.x, 100, 'v1.x should stay the same');
    assert.equal(v1.y, 200, 'v1.y should stay the same');
    assert.equal(v2.x, 300, 'v2.x should stay the same');
    assert.equal(v2.y, 400, 'v2.y should stay the same');

    assert.notStrictEqual(res, v1, 'res should not be equal to v1')
  });

});

describe('mutable', () => {

  it('should mutate and return the same instance', () => {

    const v1 = new Mutable(100, 200);
    const v2 = new Mutable(300, 400);
    const res = v1.add(v2);
    assert.equal(res.x, 400);
    assert.equal(res.y, 600);

    assert.equal(v1.x, 400, 'v1.x should be changed');
    assert.equal(v1.y, 600, 'v1.y should be changed');
    assert.equal(v2.x, 300, 'v2.x should stay the same');
    assert.equal(v2.y, 400, 'v2.y should stay the same');

    assert.equal(v1, res);
  });

});

/*
describe('mutable build', () => {

  it('should mutate and return itself', () => {

    const v1 = new Mutable(100, 200);
    const v2 = new Mutable(300, 400);
    const res = v1.add(v2);

    assert.equal(res.x, 400);
    assert.equal(res.y, 600);

    assert.equal(v1.x, 400, 'v1.x should have mutated x component');
    assert.equal(v1.y, 600, 'v1.y should have mutated y component');
    assert.equal(v2.x, 300, 'v2.x should stay the same');
    assert.equal(v2.y, 400, 'v2.y should stay the same');

    assert.strictEqual(res, v1, 'res should be a reference to v1')
  });

});
*/

describe('Victor', () => {

  describe('Victor.fromObject()', () => {

    it('should create a new instance from an object', () => {
      const obj = {x: 100, y: 200};
      const v1 = Victor.fromObject(obj);
      const v2 = new Victor(10, 20);
      const res = v1.add(v2);

      assert.instanceOf(v1, Victor);
      assert.equal(res.x, 110);
      assert.equal(res.y, 220);
    });

  });

  describe('Victor.fromArray()', () => {

    it('should create a new instance from an array', () => {
      const arr = [100, 200];
      const res = Victor.fromArray(arr);

      assert.equal(res.x, arr[0]);
      assert.equal(res.y, arr[1]);
      assert.instanceOf(res, Victor);
    });

  });

  describe('properties', () => {

    it('should get the x component', () => {
      const v1 = new Victor(100, 200);
      assert(v1.x, 100);
    });

    it('should get the y component', () => {
      const v1 = new Victor(100, 200);
      assert(v1.y, 200);
    });

    it('should not be able to directly set the x component', () => {
      const v1 = new Victor(100, 200);
      assert.throws(() => {
        v1.x = 300;
      });
    });

    it('should not be able to directly set the y component', () => {
      const v1 = new Victor(100, 200);
      assert.throws(() => {
        v1.y = 300;
      });
    });

  });

});

describe('lib', () => {

  describe('#add()', () => {

    it('should add two vectors', () => {
      const v1 = {x: 100, y: 200};
      const v2 = {x: 300, y: 400};
      const res = lib.add(v1, v2);

      assert.equal(res.x, 400);
      assert.equal(res.y, 600);
    });


    it('should handle negative components', () => {
      const v1 = {x: 100, y: -200};
      const v2 = {x: -300, y: 400};
      const res = lib.add(v1, v2);

      assert.equal(res.x, -200);
      assert.equal(res.y, 200);
    });

  });

  describe('#distanceSq()', () => {

    it('should calculate the squared distance between two vectors', () => {
      const v1 = {x: 100, y: 100};
      const v2 = {x: 100, y: 200};

      const res = lib.distanceSq(v1, v2);
      assert.approximately(res, 10000, 0.1);
    });

  });

  describe('#distance()', () => {

    it('should calculate the distance between two vectors', () => {
      const v1 = {x: 100, y: 50};
      const v2 = {x: 200, y: 70};

      const res = lib.distance(v1, v2);
      assert.approximately(res, 101.9, 0.1);
    });

  });
})

