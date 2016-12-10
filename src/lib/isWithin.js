/* @flow */

import type { Vector } from '../flowTypes';

export default function isWithin(a: Vector, bottomLeft: Vector, topRight: Vector): boolean {
  const minX = Math.min(bottomLeft.x, topRight.x);
  const maxX = Math.max(bottomLeft.x, topRight.x);
  const minY = Math.min(bottomLeft.y, topRight.y);
  const maxY = Math.max(bottomLeft.y, topRight.y);

  const withinX = a.x >= minX && a.x <= maxX;
  const withinY = a.y >= minY && a.y <= maxY;

  return withinX && withinY;
}
