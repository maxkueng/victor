/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import multiplyY from '../../src/lib/multiplyY';

describe('lib/multiplyY()', () => {
  it('should multiply the Y components of two vectors', () => {
    const v1 = { x: 100, y: 200 };
    const v2 = { x: 3, y: 4 };
    const res = multiplyY(v1, v2);

    assert.equal(res.x, 100);
    assert.equal(res.y, 800);
  });
});
