/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import outerAngleBetweenDeg from '../../src/lib/outerAngleBetweenDeg';

describe('lib/outerAngleBetween()', () => {
  it('should return the angle in degrees between two vectors', () => {
    const v1 = { x: 0, y: 100 };
    const v2 = { x: 100, y: 100 };

    assert.equal(outerAngleBetweenDeg(v1, v2), 315);
    assert.equal(outerAngleBetweenDeg(v2, v1), 315);

    const v3 = { x: 0, y: 100 };
    const v4 = { x: -100, y: 100 };

    assert.equal(outerAngleBetweenDeg(v3, v4), 315);
    assert.equal(outerAngleBetweenDeg(v4, v3), 315);
  });
});
