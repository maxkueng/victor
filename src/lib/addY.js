/* @flow */

import type { Vector } from '../flowTypes';

export default function addY(a: Vector, b: Vector): Vector {
  return {
    x: a.x,
    y: a.y + b.y,
  };
}
