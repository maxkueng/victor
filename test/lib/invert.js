/* @flow */

import { assert } from 'chai';
import invert from '../../src/lib/invert';

describe('lib/invert()', () => {
  it('should invert the components', () => {
    const v1 = { x: 100, y: 200 };
    const res = invert(v1);

    assert.equal(res.x, -100);
    assert.equal(res.y, -200);
  });

  it('should handle negative components', () => {
    const v1 = { x: 100, y: -200 };
    const res = invert(v1);

    assert.equal(res.x, -100);
    assert.equal(res.y, 200);
  });
});
