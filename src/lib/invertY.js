/* @flow */

import type { Vector } from '../flowTypes';

export default function invertY(a: Vector): Vector {
  return {
    x: a.x,
    y: a.y * -1,
  };
}
