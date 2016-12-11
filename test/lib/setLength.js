/* @flow */

import { assert } from 'chai';
import length from '../../src/lib/length';
import setLength from '../../src/lib/setLength';

describe('lib/setLength()', () => {
  it('should set the length of a vector while keeping its direction', () => {
    const v1 = { x: 100, y: 200 };
    const res = setLength(v1, 300);

    assert.equal(length(res), 300);
  });
});
