/* @flow */

import { assert } from 'chai';
import { describe, it } from 'mocha';
import gradiansToRadians from '../../src/lib/gradiansToRadians';

const EPSILON = 1e-12;

describe('lib/gradiansToRadians()', () => {
  it('should convert gradians to radians', () => {
    assert.approximately(gradiansToRadians(400), Math.PI * 2, EPSILON);
    assert.approximately(gradiansToRadians(200), Math.PI, EPSILON);
    assert.approximately(gradiansToRadians(100), Math.PI / 2, EPSILON);
    assert.approximately(gradiansToRadians(50), Math.PI / 4, EPSILON);
    assert.approximately(gradiansToRadians(-50), (Math.PI * -1) / 4, EPSILON);
  });
});
