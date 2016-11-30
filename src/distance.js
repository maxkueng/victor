/* @flow */

import type { Vector } from './flowTypes';

import distanceSq from './distanceSq';

export default function distance(a: Vector, b: Vector): number {
  return Math.sqrt(distanceSq(a, b));
}
