/* @flow */

const RADIANS_PER_DEGREE = Math.PI / 180;

export default function degreesToRadians(radians: number): number {
  return radians * RADIANS_PER_DEGREE;
}
