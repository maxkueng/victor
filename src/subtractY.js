/* @flow */

import type { Vector } from './flowTypes';

export default function subtractY(a: Vector, b: Vector): Vector {
  return {
    x: a.x,
    y: a.y - b.y,
  };
}
