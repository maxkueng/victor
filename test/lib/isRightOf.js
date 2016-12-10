/* @flow */

import { assert } from 'chai';
import isRightOf from '../../src/lib/isRightOf';

describe('lib/isRightOf()', () => {
  it('should return true if is right of another vector', () => {
    const v1 = { x: 100, y: 200 };
    const v2 = { x: 300, y: 400 };

    assert.isFalse(isRightOf(v1, v2));
    assert.isTrue(isRightOf(v2, v1));
  });
});
