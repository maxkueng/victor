/* @flow */

const RADIANS_PER_GRADIAN = (Math.PI * 2) / 400;

export default function gradiansToRadians(gradians: number): number {
  return gradians * RADIANS_PER_GRADIAN;
}
