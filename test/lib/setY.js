/* @flow */

import { assert } from 'chai';
import setY from '../../src/lib/setY';

describe('lib/setY()', () => {
  it('should set the Y component of the vector', () => {
    const v1 = { x: 100, y: 50 };

    const res = setY(v1, 42);
    assert.equal(res.x, 100);
    assert.equal(res.y, 42);
  });
});
