/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import radiansToDegrees from '../../src/lib/radiansToDegrees';

describe('lib/radiansToDegrees()', () => {
  it('should convert radians to degrees', () => {
    assert.equal(radiansToDegrees(Math.PI * 2), 360);
    assert.equal(radiansToDegrees(Math.PI), 180);
    assert.equal(radiansToDegrees(Math.PI / 2), 90);
    assert.equal(radiansToDegrees(Math.PI / 4), 45);
    assert.equal(radiansToDegrees((Math.PI * -1) / 4), -45);
  });
});
