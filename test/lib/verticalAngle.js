/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import verticalAngle from '../../src/lib/verticalAngle';

describe('lib/verticalAngle()', () => {
  it('should return the angle between a vector and the Y axis', () => {
    const v1 = { x: 100, y: 100 };
    const v2 = { x: 100, y: 0 };
    const v3 = { x: 0, y: 100 };
    const v4 = { x: 100, y: -100 };
    const v5 = { x: -100, y: 100 };

    assert.equal(verticalAngle(v1), Math.PI / 4);
    assert.equal(verticalAngle(v2), Math.PI / 2);
    assert.equal(verticalAngle(v3), 0);
    assert.equal(verticalAngle(v4), Math.PI * 0.75);
    assert.equal(verticalAngle(v5), (Math.PI / 4) * -1);
  });
});
