/* @flow */

import outerAngleBetween from '../../src/lib/outerAngleBetween';
import radiansToDegrees from '../../src/lib/radiansToDegrees';

import type { Vector } from '../flowTypes';

export default function outerAngleBetweenDeg(a: Vector, b: Vector): number {
  return radiansToDegrees(outerAngleBetween(a, b));
}
