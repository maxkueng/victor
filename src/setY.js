/* @flow */

import type { Vector } from './flowTypes';

export default function setX(a: Vector, y: number): Vector {
  return {
    y,
    x: a.x,
  };
}
