/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import distanceSquared from '../../src/lib/distanceSquared';

describe('lib/distanceSquared()', () => {
  it('should calculate the squared distance between two vectors', () => {
    const v1 = { x: 100, y: 100 };
    const v2 = { x: 100, y: 200 };

    const res = distanceSquared(v1, v2);
    assert.approximately(res, 10000, 0.1);
  });
});
