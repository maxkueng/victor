/* @flow */

import randomizeComponent from './randomizeComponent';

import type { Randomizer, Vector } from '../flowTypes';

export default function randomizeY(
  { x }: Vector,
  bottomLeft: Vector,
  topRight: Vector,
  randomizer: Randomizer,
): Vector {
  const min = Math.min(bottomLeft.y, topRight.y);
  const max = Math.max(bottomLeft.y, topRight.y);
  const y = randomizeComponent(min, max, randomizer);

  return {
    x,
    y,
  };
}
