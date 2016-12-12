/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import turnsToRadians from '../../src/lib/turnsToRadians';

describe('lib/turnsToRadians()', () => {
  it('should convert turns to radians', () => {
    assert.equal(turnsToRadians(1), Math.PI * 2);
    assert.equal(turnsToRadians(0.5), Math.PI);
    assert.equal(turnsToRadians(0.25), Math.PI / 2);
    assert.equal(turnsToRadians(1 / 8), Math.PI / 4);
    assert.equal(turnsToRadians(-1 / 8), (Math.PI * -1) / 4);
  });
});
