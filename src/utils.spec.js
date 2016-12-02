/* @flow */

import { assert } from 'chai';
import { callMethod } from './utils';

import type { Vector } from './flowTypes';

describe('utils.callMethod()', () => {
  it('should do the thing', () => {
    const v1: Vector = {
      x: 100,
      y: 200,
    };

    const v2: Vector = {
      x: 3,
      y: 4,
    };

    function multiply(a: Vector, b: Vector): Vector {
      assert.deepEqual(a, v1);
      assert.deepEqual(b, v2);

      return {
        x: a.x * b.x,
        y: a.y * b.y,
      };
    }

    const res: Vector = callMethod(v1, multiply, v2);
    assert.deepEqual(res, {
      x: 300,
      y: 800,
    });
  });
});
