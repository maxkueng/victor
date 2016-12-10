/* @flow */

import { assert } from 'chai';
import dot from '../../src/lib/dot';

describe('lib/dot()', () => {
  it('should return the dot product of two vectors', () => {
    const v1 = { x: 42, y: 21 };
    const v2 = { x: 44, y: 42 };
    const res = dot(v1, v2);

    assert.equal(res, 2730);
  });

  it('should return the dot product of two vectors', () => {
    const v1 = { x: 10, y: 20 };
    const v2 = { x: 250, y: 160 };
    const res = dot(v1, v2);

    assert.equal(res, 5700);
  });
});
