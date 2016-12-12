/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import outerAngleBetween from '../../src/lib/outerAngleBetween';

describe('lib/outerAngleBetween()', () => {
  it('should return the angle between two vectors', () => {
    const v1 = { x: 0, y: 100 };
    const v2 = { x: 100, y: 100 };

    assert.equal(outerAngleBetween(v1, v2), Math.PI * 1.75);
    assert.equal(outerAngleBetween(v2, v1), Math.PI * 1.75);

    const v3 = { x: 0, y: 100 };
    const v4 = { x: -100, y: 100 };

    assert.equal(outerAngleBetween(v3, v4), Math.PI * 1.75);
    assert.equal(outerAngleBetween(v4, v3), Math.PI * 1.75);

    const v5 = { x: 0, y: 0 };
    const v6 = { x: 100, y: 100 };

    assert.equal(outerAngleBetween(v5, v6), Math.PI * 1.75);
    assert.equal(outerAngleBetween(v6, v5), Math.PI * 1.75);

    const v7 = { x: 100, y: 100 };
    const v8 = { x: 100, y: 100 };

    assert.equal(outerAngleBetween(v7, v8), Math.PI * 2);
    assert.equal(outerAngleBetween(v8, v7), Math.PI * 2);

    const v9 = { x: 100, y: -100 };
    const v10 = { x: -100, y: -100 };

    assert.equal(outerAngleBetween(v9, v10), Math.PI * 1.5);
    assert.equal(outerAngleBetween(v10, v9), Math.PI * 1.5);

    const v11 = { x: -100, y: 100 };
    const v12 = { x: -100, y: -100 };

    assert.equal(outerAngleBetween(v11, v12), Math.PI * 1.5);
    assert.equal(outerAngleBetween(v12, v11), Math.PI * 1.5);
  });
});
