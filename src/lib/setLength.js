/* @flow */

import normalize from './normalize';
import multiply from './multiply';

import type { Vector } from '../flowTypes';

export default function setLength(a: Vector, newLength: number): Vector {
  const normalized = normalize(a);

  return multiply(normalized, {
    x: newLength,
    y: newLength,
  });
}
