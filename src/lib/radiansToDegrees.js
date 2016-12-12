/* @flow */

const DEGREES_PER_RADIAN = 180 / Math.PI;

export default function radiansToDegrees(radians: number): number {
  return radians * DEGREES_PER_RADIAN;
}
