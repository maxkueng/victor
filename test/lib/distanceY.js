/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import distanceY from '../../src/lib/distanceY';

describe('lib/distanceY()', () => {
  it('should calculate the distance of the Y components between two vectors', () => {
    const v1 = { x: 100, y: 50 };
    const v2 = { x: 200, y: 70 };

    const res = distanceY(v1, v2);
    assert.equal(res, 20);

    const v3 = { x: 100, y: -50 };
    const v4 = { x: 200, y: 70 };

    const res2 = distanceY(v3, v4);
    assert.equal(res2, 120);

    const v5 = { x: 200, y: 70 };
    const v6 = { x: 100, y: 50 };

    const res3 = distanceY(v5, v6);
    assert.equal(res3, 20);
  });
});
