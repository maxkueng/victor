/* @flow */

import { assert } from 'chai';
import addY from '../../src/lib/addY';

describe('lib/addY()', () => {
  it('should add the Y components of two vectors', () => {
    const v1 = { x: 100, y: 200 };
    const v2 = { x: 300, y: 400 };
    const res = addY(v1, v2);

    assert.equal(res.x, 100);
    assert.equal(res.y, 600);
  });
});
