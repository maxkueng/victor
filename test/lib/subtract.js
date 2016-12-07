/* @flow */

import { assert } from 'chai';
import subtract from '../../src/lib/subtract';

describe('lib/subtract()', () => {
  it('should subtract two vectors', () => {
    const v1 = { x: 500, y: 300 };
    const v2 = { x: 200, y: 100 };
    const res = subtract(v1, v2);

    assert.equal(res.x, 300);
    assert.equal(res.y, 200);
  });

  it('should handle negative components', () => {
    const v1 = { x: 100, y: -200 };
    const v2 = { x: -300, y: 400 };
    const res = subtract(v1, v2);

    assert.equal(res.x, 400);
    assert.equal(res.y, -600);
  });
});
