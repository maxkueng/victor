/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import radiansToTurns from '../../src/lib/radiansToTurns';

describe('lib/radiansToTurns()', () => {
  it('should convert radians to turns', () => {
    assert.equal(radiansToTurns(Math.PI * 2), 1);
    assert.equal(radiansToTurns(Math.PI), 0.5);
    assert.equal(radiansToTurns(Math.PI / 2), 0.25);
    assert.equal(radiansToTurns(Math.PI / 4), 1 / 8);
    assert.equal(radiansToTurns((Math.PI * -1) / 4), -1 / 8);
  });
});
