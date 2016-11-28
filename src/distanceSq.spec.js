import { assert } from 'chai';
import distanceSq from './distanceSq';

describe('#distanceSq()', () => {
  it('should calculate the squared distance between two vectors', () => {
    const v1 = { x: 100, y: 100 };
    const v2 = { x: 100, y: 200 };

    const res = distanceSq(v1, v2);
    assert.approximately(res, 10000, 0.1);
  });
});
