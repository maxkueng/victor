/* @flow */

import randomizeComponent from './randomizeComponent';

import type { Randomizer, Vector } from '../flowTypes';

export default function randomizeX(
  { y }: Vector,
  bottomLeft: Vector,
  topRight: Vector,
  randomizer: Randomizer,
): Vector {
  const min = Math.min(bottomLeft.x, topRight.x);
  const max = Math.max(bottomLeft.x, topRight.x);
  const x = randomizeComponent(min, max, randomizer);

  return {
    x,
    y,
  };
}
