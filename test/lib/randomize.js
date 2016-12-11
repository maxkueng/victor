/* @flow */

import { assert } from 'chai';
import randomize from '../../src/lib/randomize';

describe('lib/randomize()', () => {
  it('should randomize both components of the vector', () => {
    const bottomLeft = { x: 1000, y: 1000 };
    const topRight = { x: 2000, y: 2000 };
    const v1 = { x: 500, y: 600 };
    const res = randomize(v1, bottomLeft, topRight, Math.random);

    assert.notEqual(res.x, 500);
    assert.notEqual(res.y, 600);
  });
});
