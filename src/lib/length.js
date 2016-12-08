/* @flow */

import lengthSquared from './lengthSquared';

import type { Vector } from '../flowTypes';

export default function length(a: Vector): number {
  return Math.sqrt(lengthSquared(a));
}
