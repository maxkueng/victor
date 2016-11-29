/* @flow */

import type { Vector } from './flowTypes';

export default function setX(a: Vector, x: number): Vector {
  return {
    x,
    y: a.y,
  };
}
