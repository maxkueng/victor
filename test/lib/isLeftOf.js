/* @flow */

import { assert } from 'chai';
import isLeftOf from '../../src/lib/isLeftOf';

describe('lib/isLeftOf()', () => {
  it('should return true if is left of another vector', () => {
    const v1 = { x: 100, y: 200 };
    const v2 = { x: 300, y: 400 };

    assert.isTrue(isLeftOf(v1, v2));
    assert.isFalse(isLeftOf(v2, v1));
  });
});
