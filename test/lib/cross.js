/* @flow */

import { assert } from 'chai';
import cross from '../../src/lib/cross';

describe('lib/cross()', () => {
  it('should return the cross product of two vectors', () => {
    const v1 = { x: 42, y: 21 };
    const v2 = { x: 44, y: 42 };
    const res = cross(v1, v2);

    assert.equal(res, 840);
  });

  it('should return the cross product of two vectors', () => {
    const v1 = { x: 10, y: 20 };
    const v2 = { x: 60, y: 80 };
    const res = cross(v1, v2);

    assert.equal(res, -400);
  });
});
