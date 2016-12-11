/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import randomizeY from '../../src/lib/randomizeY';

describe('lib/randomizeY()', () => {
  it('should randomize y component of the vector', () => {
    const bottomLeft = { x: 1000, y: 1000 };
    const topRight = { x: 2000, y: 2000 };
    const v1 = { x: 500, y: 600 };
    const res = randomizeY(v1, bottomLeft, topRight, Math.random);

    assert.equal(res.x, 500);
    assert.notEqual(res.y, 600);
  });
});
