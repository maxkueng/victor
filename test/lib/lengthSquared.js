/* @flow */

import { assert } from 'chai';
import lengthSquared from '../../src/lib/lengthSquared';

describe('lib/lengthSquared()', () => {
  it('should calculate the squared length', () => {
    const v1 = { x: 100, y: 100 };

    const res = lengthSquared(v1);
    assert.equal(res, 20000);
  });
});
