/* @flow */

const TURNS_PER_RADIAN = 0.5 / Math.PI;

export default function radiansToTurns(radians: number): number {
  return radians * TURNS_PER_RADIAN;
}
