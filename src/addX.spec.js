/* @flow */

import { assert } from 'chai';
import addX from './addX';

describe('lib/addX()', () => {
  it('should add the X components of two vectors', () => {
    const v1 = { x: 100, y: 200 };
    const v2 = { x: 300, y: 400 };
    const res = addX(v1, v2);

    assert.equal(res.x, 400);
    assert.equal(res.y, 200);
  });
});
