/* @flow */

import type { Vector } from '../flowTypes';

export default function isLeftOf(a: Vector, b: Vector): boolean {
  return a.x < b.x;
}
