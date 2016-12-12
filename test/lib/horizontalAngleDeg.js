/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import horizontalAngleDeg from '../../src/lib/horizontalAngleDeg';

describe('lib/horizontalAngleDeg()', () => {
  it('should return the angle in degrees between a vector and the X axis', () => {
    const v1 = { x: 100, y: 100 };
    const v2 = { x: 0, y: 100 };

    assert.equal(horizontalAngleDeg(v1), 45);
    assert.equal(horizontalAngleDeg(v2), 90);
  });
});
