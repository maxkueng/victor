/* @flow */

import { assert } from 'chai';
import randomizeX from '../../src/lib/randomizeX';

describe('lib/randomizeX()', () => {
  it('should randomize x component of the vector', () => {
    const bottomLeft = { x: 1000, y: 1000 };
    const topRight = { x: 2000, y: 2000 };
    const v1 = { x: 500, y: 600 };
    const res = randomizeX(v1, bottomLeft, topRight, Math.random);

    assert.notEqual(res.x, 500);
    assert.equal(res.y, 600);
  });
});
