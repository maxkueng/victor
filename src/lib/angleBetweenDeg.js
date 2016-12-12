/* @flow */

import angleBetween from '../../src/lib/angleBetween';
import radiansToDegrees from '../../src/lib/radiansToDegrees';

import type { Vector } from '../flowTypes';

export default function angleBetweenDeg(a: Vector, b: Vector): number {
  return radiansToDegrees(angleBetween(a, b));
}
