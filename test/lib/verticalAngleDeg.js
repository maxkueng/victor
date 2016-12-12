/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import verticalAngleDeg from '../../src/lib/verticalAngleDeg';

describe('lib/verticalAngleDeg()', () => {
  it('should return the angle in degrees between a vector and the Y axis', () => {
    const v1 = { x: 100, y: 100 };
    const v2 = { x: 0, y: 100 };

    assert.equal(verticalAngleDeg(v1), 45);
    assert.equal(verticalAngleDeg(v2), 0);
  });
});
