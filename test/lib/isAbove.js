/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import isAbove from '../../src/lib/isAbove';

describe('lib/isAbove()', () => {
  it('should return true if is above of another vector', () => {
    const v1 = { x: 100, y: 200 };
    const v2 = { x: 300, y: 400 };

    assert.isFalse(isAbove(v1, v2));
    assert.isTrue(isAbove(v2, v1));
  });
});
