/* @flow */

import distanceSquared from './distanceSquared';

import type { Vector } from './flowTypes';

export default function distance(a: Vector, b: Vector): number {
  return Math.sqrt(distanceSquared(a, b));
}
