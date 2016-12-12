/* @flow */

import horizontalAngle from '../../src/lib/horizontalAngle';
import radiansToDegrees from '../../src/lib/radiansToDegrees';

import type { Vector } from '../flowTypes';

export default function horizontalAngleDeg(a: Vector): number {
  return radiansToDegrees(horizontalAngle(a));
}
