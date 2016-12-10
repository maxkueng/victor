/* @flow */

import type { Vector } from '../flowTypes';

export default function isBelow(a: Vector, b: Vector): boolean {
  return a.y < b.y;
}
