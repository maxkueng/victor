/* @flow */

import angleBetween from '../../src/lib/angleBetween';

import type { Vector } from '../flowTypes';

export default function outerAngleBetween(a: Vector, b: Vector): number {
  return (Math.PI * 2) - angleBetween(a, b);
}
