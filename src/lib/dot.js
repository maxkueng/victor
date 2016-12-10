/* @flow */

import type { Vector } from '../flowTypes';

export default function dot(a: Vector, b: Vector): number {
  return (a.x * b.x) + (a.y * b.y);
}
