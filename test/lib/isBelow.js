/* @flow */

import { assert } from 'chai';
import isBelow from '../../src/lib/isBelow';

describe('lib/isBelow()', () => {
  it('should return true if is below of another vector', () => {
    const v1 = { x: 100, y: 200 };
    const v2 = { x: 300, y: 400 };

    assert.isTrue(isBelow(v1, v2));
    assert.isFalse(isBelow(v2, v1));
  });
});
