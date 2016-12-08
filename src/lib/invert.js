/* @flow */

import type { Vector } from '../flowTypes';

export default function invert(a: Vector): Vector {
  return {
    x: a.x * -1,
    y: a.y * -1,
  };
}
