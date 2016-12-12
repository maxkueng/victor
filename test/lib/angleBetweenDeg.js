/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import angleBetweenDeg from '../../src/lib/angleBetweenDeg';

describe('lib/angleBetweenDeg()', () => {
  it('should return the angle in degrees between two vectors', () => {
    const v1 = { x: 0, y: 100 };
    const v2 = { x: 100, y: 100 };

    assert.equal(angleBetweenDeg(v1, v2), 45);
    assert.equal(angleBetweenDeg(v2, v1), 45);
  });
});
