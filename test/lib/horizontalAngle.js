/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import horizontalAngle from '../../src/lib/horizontalAngle';

describe('lib/horizontalAngle()', () => {
  it('should return the angle between a vector and the X axis', () => {
    const v1 = { x: 100, y: 100 };
    const v2 = { x: 0, y: 100 };
    const v3 = { x: 100, y: 0 };
    const v4 = { x: -100, y: 100 };
    const v5 = { x: 100, y: -100 };

    assert.equal(horizontalAngle(v1), Math.PI / 4);
    assert.equal(horizontalAngle(v2), Math.PI / 2);
    assert.equal(horizontalAngle(v3), 0);
    assert.equal(horizontalAngle(v4), Math.PI * 0.75);
    assert.equal(horizontalAngle(v5), (Math.PI / 4) * -1);
  });
});
