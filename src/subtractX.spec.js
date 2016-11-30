/* @flow */

import { assert } from 'chai';
import subtractX from './subtractX';

describe('#subtractX()', () => {
  it('should subtract the X component of two vectors', () => {
    const v1 = { x: 500, y: 300 };
    const v2 = { x: 200, y: 100 };
    const res = subtractX(v1, v2);

    assert.equal(res.x, 300);
    assert.equal(res.y, 300);
  });
});
