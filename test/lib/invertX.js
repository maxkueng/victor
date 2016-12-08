/* @flow */

import { assert } from 'chai';
import invertX from '../../src/lib/invertX';

describe('lib/invertX()', () => {
  it('should invert the X component', () => {
    const v1 = { x: 100, y: 200 };
    const res = invertX(v1);

    assert.equal(res.x, -100);
    assert.equal(res.y, 200);
  });
});
