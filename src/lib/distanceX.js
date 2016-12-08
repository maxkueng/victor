/* @flow */

import type { Vector } from '../flowTypes';

export default function distanceX(a: Vector, b: Vector): number {
  return Math.abs(b.x - a.x);
}
