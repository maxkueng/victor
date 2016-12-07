/* @flow */

import { assert } from 'chai';
import set from '../../src/lib/set';

describe('lib/set()', () => {
  it('should set the X and Ycomponent of the vector', () => {
    const v1 = { x: 100, y: 50 };

    const res = set(v1, 42, 24);
    assert.equal(res.x, 42);
    assert.equal(res.y, 24);
  });
});
