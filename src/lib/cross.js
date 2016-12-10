/* @flow */

import type { Vector } from '../flowTypes';

export default function cross(a: Vector, b: Vector): number {
  return (a.x * b.y) - (a.y * b.x);
}
