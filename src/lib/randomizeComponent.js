/* @flow */

import type { Randomizer, VectorComponent } from '../flowTypes';

export default function randomizeComponent(
  min: VectorComponent,
  max: VectorComponent,
  randomizer: Randomizer,
): VectorComponent {
  return Math.floor((randomizer() * ((max - min) + 1)) + min);
}
