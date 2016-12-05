/* @flow */

import type { VectorComponent, Vector } from '../flowTypes';

export default function setY(a: Vector, y: VectorComponent): Vector {
  return {
    y,
    x: a.x,
  };
}
