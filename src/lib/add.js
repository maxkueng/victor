/* @flow */

import type { Vector } from './flowTypes';

export default function add(a: Vector, b: Vector): Vector {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  };
}
