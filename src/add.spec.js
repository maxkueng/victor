/* @flow */

import { assert } from 'chai';
import add from './add';

describe('#add()', () => {
  it('should add two vectors', () => {
    const v1 = { x: 100, y: 200 };
    const v2 = { x: 300, y: 400 };
    const res = add(v1, v2);

    assert.equal(res.x, 400);
    assert.equal(res.y, 600);
  });


  it('should handle negative components', () => {
    const v1 = { x: 100, y: -200 };
    const v2 = { x: -300, y: 400 };
    const res = add(v1, v2);

    assert.equal(res.x, -200);
    assert.equal(res.y, 200);
  });
});
