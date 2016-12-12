/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import angleBetween from '../../src/lib/angleBetween';

describe('lib/angleBetween()', () => {
  it('should return the angle between two vectors', () => {
    const v1 = { x: 0, y: 100 };
    const v2 = { x: 100, y: 100 };

    assert.equal(angleBetween(v1, v2), Math.PI / 4);
    assert.equal(angleBetween(v2, v1), Math.PI / 4);

    const v3 = { x: 0, y: 100 };
    const v4 = { x: -100, y: 100 };

    assert.equal(angleBetween(v3, v4), Math.PI / 4);
    assert.equal(angleBetween(v4, v3), Math.PI / 4);

    const v5 = { x: 0, y: 0 };
    const v6 = { x: 100, y: 100 };

    assert.equal(angleBetween(v5, v6), Math.PI / 4);
    assert.equal(angleBetween(v6, v5), Math.PI / 4);

    const v7 = { x: 100, y: 100 };
    const v8 = { x: 100, y: 100 };

    assert.equal(angleBetween(v7, v8), 0);
    assert.equal(angleBetween(v8, v7), 0);

    const v9 = { x: 100, y: -100 };
    const v10 = { x: -100, y: -100 };

    assert.equal(angleBetween(v9, v10), Math.PI / 2);
    assert.equal(angleBetween(v10, v9), Math.PI / 2);

    const v11 = { x: -100, y: 100 };
    const v12 = { x: -100, y: -100 };

    assert.equal(angleBetween(v11, v12), Math.PI / 2);
    assert.equal(angleBetween(v12, v11), Math.PI / 2);
  });
});
