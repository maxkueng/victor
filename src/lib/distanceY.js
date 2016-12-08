/* @flow */

import type { Vector } from '../flowTypes';

export default function distanceY(a: Vector, b: Vector): number {
  return Math.abs(b.y - a.y);
}
