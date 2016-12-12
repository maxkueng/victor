/* @flow */

import verticalAngle from '../../src/lib/verticalAngle';
import radiansToDegrees from '../../src/lib/radiansToDegrees';

import type { Vector } from '../flowTypes';

export default function verticalAngleDeg(a: Vector): number {
  return radiansToDegrees(verticalAngle(a));
}
