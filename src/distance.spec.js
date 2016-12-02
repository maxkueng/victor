/* @flow */

import { assert } from 'chai';
import distance from './distance';

describe('lib/distance()', () => {
  it('should calculate the distance between two vectors', () => {
    const v1 = { x: 100, y: 50 };
    const v2 = { x: 200, y: 70 };

    const res = distance(v1, v2);
    assert.approximately(res, 101.9, 0.1);
  });
});
