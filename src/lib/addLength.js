/* @flow */

import length from './length';
import setLength from './setLength';

import type { Vector } from '../flowTypes';

export default function addLength(a: Vector, addedLength: number): Vector {
  const newLength = length(a) + addedLength;

  return setLength(a, newLength);
}
