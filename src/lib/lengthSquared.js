/* @flow */

import type { Vector } from '../flowTypes';

export default function lengthSquared(a: Vector): number {
  return (a.x * a.x) + (a.y * a.y);
}
