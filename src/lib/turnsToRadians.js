/* @flow */

const RADIANS_PER_TURN = Math.PI / 0.5;

export default function turnsToRadians(turns: number): number {
  return turns * RADIANS_PER_TURN;
}
