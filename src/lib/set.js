/* @flow */

import type { VectorComponent, Vector } from '../flowTypes';

export default function set(a: Vector, x: VectorComponent, y: VectorComponent): Vector {
  return {
    x,
    y,
  };
}
