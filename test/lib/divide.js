/* @flow */

import { assert } from 'chai';
import divide from '../../src/lib/divide';

describe('lib/divide()', () => {
  it('should divide two vectors', () => {
    const v1 = { x: 100, y: 200 };
    const v2 = { x: 4, y: 10 };
    const res = divide(v1, v2);

    assert.equal(res.x, 25);
    assert.equal(res.y, 20);
  });

  it('should handle negative components', () => {
    const v1 = { x: 100, y: -200 };
    const v2 = { x: -2, y: 10 };
    const res = divide(v1, v2);

    assert.equal(res.x, -50);
    assert.equal(res.y, -20);
  });
});
