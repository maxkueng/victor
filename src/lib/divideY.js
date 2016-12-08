/* @flow */

import type { Vector } from '../flowTypes';

export default function divideY(a: Vector, b: Vector): Vector {
  return {
    x: a.x,
    y: a.y / b.y,
  };
}
