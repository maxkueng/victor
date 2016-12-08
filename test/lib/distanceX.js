/* @flow */

import { assert } from 'chai';
import distanceX from '../../src/lib/distanceX';

describe('lib/distanceX()', () => {
  it('should calculate the distance of the X components between two vectors', () => {
    const v1 = { x: 100, y: 50 };
    const v2 = { x: 200, y: 70 };

    const res = distanceX(v1, v2);
    assert.equal(res, 100);

    const v3 = { x: -100, y: 50 };
    const v4 = { x: 200, y: 70 };

    const res2 = distanceX(v3, v4);
    assert.equal(res2, 300);

    const v5 = { x: 200, y: 50 };
    const v6 = { x: 100, y: 70 };

    const res3 = distanceX(v5, v6);
    assert.equal(res3, 100);
  });
});
