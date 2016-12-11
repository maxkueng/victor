/* @flow */

import { assert } from 'chai';
import length from '../../src/lib/length';
import addLength from '../../src/lib/addLength';

describe('lib/addLength()', () => {
  it('should add length to a vector while keeping its direction', () => {
    const v1 = { x: 100, y: 200 };
    const res = addLength(v1, 300);

    assert.equal(length(res), length(v1) + 300);
  });
});
