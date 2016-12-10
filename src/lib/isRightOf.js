/* @flow */

import type { Vector } from '../flowTypes';

export default function isRightOf(a: Vector, b: Vector): boolean {
  return a.x > b.x;
}
