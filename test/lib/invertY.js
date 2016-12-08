/* @flow */

import { assert } from 'chai';
import invertY from '../../src/lib/invertY';

describe('lib/invertY()', () => {
  it('should invert the Y component', () => {
    const v1 = { x: 100, y: 200 };
    const res = invertY(v1);

    assert.equal(res.x, 100);
    assert.equal(res.y, -200);
  });
});
