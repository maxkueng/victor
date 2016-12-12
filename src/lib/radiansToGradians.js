/* @flow */

const GRADIANS_PER_RADIAN = 200 / Math.PI;

export default function radiansToGradians(radians: number): number {
  return radians * GRADIANS_PER_RADIAN;
}
