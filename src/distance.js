/* @flow */

import distanceSq from './distanceSq';

import type { Vector } from './flowTypes';

export default function distance(a: Vector, b: Vector): number {
  return Math.sqrt(distanceSq(a, b));
}
