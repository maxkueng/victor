/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import multiplyX from '../../src/lib/multiplyX';

describe('lib/multiplyX()', () => {
  it('should multiply the X components of two vectors', () => {
    const v1 = { x: 100, y: 200 };
    const v2 = { x: 3, y: 4 };
    const res = multiplyX(v1, v2);

    assert.equal(res.x, 300);
    assert.equal(res.y, 200);
  });
});
