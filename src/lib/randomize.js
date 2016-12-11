/* @flow */

import randomizeX from './randomizeX';
import randomizeY from './randomizeY';

import type { Randomizer, Vector } from '../flowTypes';

export default function randomize(
  v: Vector,
  bottomLeft: Vector,
  topRight: Vector,
  randomizer: Randomizer,
): Vector {
  const { x } = randomizeX(v, bottomLeft, topRight, randomizer);
  const { y } = randomizeY(v, bottomLeft, topRight, randomizer);

  return {
    x,
    y,
  };
}
