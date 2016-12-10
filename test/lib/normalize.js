/* @flow */

import { assert } from 'chai';
import normalize from '../../src/lib/normalize';
import length from '../../src/lib/length';

describe('lib/normalize()', () => {
  it('should return x:1, y:0 for a vector of length 0', () => {
    const v1 = { x: 0, y: 0 };
    const res = normalize(v1);

    assert.equal(res.x, 1);
    assert.equal(res.y, 0);
  });

  it('should return a vector with the length of 1', () => {
    const v1 = { x: 123, y: 456 };
    const res = normalize(v1);

    assert.equal(length(res), 1);
  });
});
