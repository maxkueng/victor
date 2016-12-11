/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import divideY from '../../src/lib/divideY';

describe('lib/divideY()', () => {
  it('should divide the Y components of two vectors', () => {
    const v1 = { x: 100, y: 200 };
    const v2 = { x: 4, y: 10 };
    const res = divideY(v1, v2);

    assert.equal(res.x, 100);
    assert.equal(res.y, 20);
  });
});
