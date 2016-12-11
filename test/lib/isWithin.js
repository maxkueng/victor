/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import isWithin from '../../src/lib/isWithin';

describe('lib/isWithin()', () => {
  it('should return true if is within bounds', () => {
    const bottomLeft = { x: 10, y: 10 };
    const topRight = { x: 300, y: 300 };

    const v1 = { x: 9, y: 1 };
    const v2 = { x: 100, y: 500 };
    const v3 = { x: 100, y: 200 };
    const v4 = { x: 10, y: 10 };
    const v5 = { x: 100, y: 300 };

    assert.isFalse(isWithin(v1, bottomLeft, topRight));
    assert.isFalse(isWithin(v1, topRight, bottomLeft));

    assert.isFalse(isWithin(v2, bottomLeft, topRight));
    assert.isFalse(isWithin(v2, topRight, bottomLeft));

    assert.isTrue(isWithin(v3, bottomLeft, topRight));
    assert.isTrue(isWithin(v3, topRight, bottomLeft));

    assert.isTrue(isWithin(v4, bottomLeft, topRight));
    assert.isTrue(isWithin(v4, topRight, bottomLeft));

    assert.isTrue(isWithin(v5, bottomLeft, topRight));
    assert.isTrue(isWithin(v5, topRight, bottomLeft));
  });

  it('should handle negative values', () => {
    const bottomLeft = { x: -500, y: -100 };
    const topRight = { x: 100, y: 0 };

    const v1 = { x: -600, y: 1 };
    const v2 = { x: 100, y: 1 };
    const v3 = { x: -500, y: -50 };
    const v4 = { x: 10, y: 0 };
    const v5 = { x: -100, y: -99 };

    assert.isFalse(isWithin(v1, bottomLeft, topRight));
    assert.isFalse(isWithin(v1, topRight, bottomLeft));

    assert.isFalse(isWithin(v2, bottomLeft, topRight));
    assert.isFalse(isWithin(v2, topRight, bottomLeft));

    assert.isTrue(isWithin(v3, bottomLeft, topRight));
    assert.isTrue(isWithin(v3, topRight, bottomLeft));

    assert.isTrue(isWithin(v4, bottomLeft, topRight));
    assert.isTrue(isWithin(v4, topRight, bottomLeft));

    assert.isTrue(isWithin(v5, bottomLeft, topRight));
    assert.isTrue(isWithin(v5, topRight, bottomLeft));
  });
});
