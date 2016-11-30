/* @flow */

import type { Vector } from './flowTypes';

export default function distanceSq(a: Vector, b: Vector): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;

  return (dx * dx) + (dy * dy);
}
