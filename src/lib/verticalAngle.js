/* @flow */

import type { Vector } from '../flowTypes';

export default function verticalAngle(a: Vector): number {
  return Math.atan2(a.x, a.y);
}
