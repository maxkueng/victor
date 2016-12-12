/* @flow */

import type { Vector } from '../flowTypes';

export default function angleBetween(a: Vector, b: Vector): number {
  const angle = Math.abs(Math.atan2(b.x, b.y) - Math.atan2(a.x, a.y));
  if (angle <= Math.PI) {
    return angle;
  }

  return (Math.PI * 2) - angle;
}
