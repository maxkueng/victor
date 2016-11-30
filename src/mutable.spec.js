/* @flow */

import { assert } from 'chai';
import Victor from '../src/mutable';

describe('mutable', () => {
  it('should mutate and return the same instance', () => {
    const v1 = new Victor(100, 200);
    const v2 = new Victor(300, 400);
    const res = v1.add(v2);
    assert.equal(res.x, 400);
    assert.equal(res.y, 600);

    assert.equal(v1.x, 400, 'v1.x should be changed');
    assert.equal(v1.y, 600, 'v1.y should be changed');
    assert.equal(v2.x, 300, 'v2.x should stay the same');
    assert.equal(v2.y, 400, 'v2.y should stay the same');

    assert.equal(v1, res);
  });
});
