/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import divideX from '../../src/lib/divideX';

describe('lib/divideX()', () => {
  it('should divide the X components of two vectors', () => {
    const v1 = { x: 100, y: 200 };
    const v2 = { x: 4, y: 10 };
    const res = divideX(v1, v2);

    assert.equal(res.x, 25);
    assert.equal(res.y, 200);
  });
});
