/* @flow */

import type { VectorComponent, Vector } from './flowTypes';

export default function setX(a: Vector, x: VectorComponent): Vector {
  return {
    x,
    y: a.y,
  };
}
