/* @flow */

import length from './length';
import divide from './divide';

import type { Vector } from '../flowTypes';

export default function normalize(a: Vector): Vector {
  const len = length(a);

  if (len === 0) {
    return {
      x: 1,
      y: 0,
    };
  }

  return divide(a, {
    x: len,
    y: len,
  });
}
