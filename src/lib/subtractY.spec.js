/* @flow */

import { assert } from 'chai';
import subtractY from './subtractY';

describe('lib/subtractY()', () => {
  it('should subtract the Y components of two vectors', () => {
    const v1 = { x: 500, y: 300 };
    const v2 = { x: 200, y: 100 };
    const res = subtractY(v1, v2);

    assert.equal(res.x, 500);
    assert.equal(res.y, 200);
  });
});
