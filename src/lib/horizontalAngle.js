/* @flow */

import type { Vector } from '../flowTypes';

export default function horizontalAngle(a: Vector): number {
  return Math.atan2(a.y, a.x);
}
