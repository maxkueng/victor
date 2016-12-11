/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import multiply from '../../src/lib/multiply';

describe('lib/multiply()', () => {
  it('should multiply two vectors', () => {
    const v1 = { x: 100, y: 200 };
    const v2 = { x: 3, y: 4 };
    const res = multiply(v1, v2);

    assert.equal(res.x, 300);
    assert.equal(res.y, 800);
  });

  it('should handle negative components', () => {
    const v1 = { x: 100, y: -200 };
    const v2 = { x: -3, y: 4 };
    const res = multiply(v1, v2);

    assert.equal(res.x, -300);
    assert.equal(res.y, -800);
  });
});
