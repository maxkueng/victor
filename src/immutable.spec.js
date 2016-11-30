/* @flow */

import { assert } from 'chai';
import Victor from '../src/immutable';

describe('immutable', () => {
  it('should not mutate and return a new instance', () => {
    const v1 = new Victor(100, 200);
    const v2 = new Victor(300, 400);
    const res = v1.add(v2);

    assert.equal(res.x, 400);
    assert.equal(res.y, 600);

    assert.equal(v1.x, 100, 'v1.x should stay the same');
    assert.equal(v1.y, 200, 'v1.y should stay the same');
    assert.equal(v2.x, 300, 'v2.x should stay the same');
    assert.equal(v2.y, 400, 'v2.y should stay the same');

    assert.notStrictEqual(res, v1, 'res should not be equal to v1');
  });
});
