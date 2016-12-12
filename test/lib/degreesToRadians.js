/* @flow */

import { assert } from 'chai';
import degreesToRadians from '../../src/lib/degreesToRadians';

describe('lib/degreesToRadians()', () => {
  it('should convert degrees to radians', () => {
    assert.equal(degreesToRadians(360), Math.PI * 2);
    assert.equal(degreesToRadians(180), Math.PI);
    assert.equal(degreesToRadians(90), Math.PI / 2);
    assert.equal(degreesToRadians(45), Math.PI / 4);
    assert.equal(degreesToRadians(-45), (Math.PI * -1) / 4);
  });
});
