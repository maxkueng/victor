/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import radiansToGradians from '../../src/lib/radiansToGradians';

describe('lib/radiansToGradians()', () => {
  it('should convert radians to gradians', () => {
    assert.equal(radiansToGradians(Math.PI * 2), 400);
    assert.equal(radiansToGradians(Math.PI), 200);
    assert.equal(radiansToGradians(Math.PI / 2), 100);
    assert.equal(radiansToGradians(Math.PI / 4), 50);
    assert.equal(radiansToGradians((Math.PI * -1) / 4), -50);
  });
});
