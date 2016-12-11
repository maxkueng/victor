/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import length from '../../src/lib/length';
import lengthSquared from '../../src/lib/lengthSquared';

describe('lib/length()', () => {
  it('should calculate the length', () => {
    const v1 = { x: 100, y: 100 };

    const res = length(v1);
    assert.approximately(res, 141.42135623, 0.00000001);
    assert.approximately(res, Math.sqrt(lengthSquared(v1)), 0.00000001);
  });
});
