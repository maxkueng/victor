import distanceSq from './distanceSq';

export default function distance(a, b) {
  return Math.sqrt(distanceSq(a, b));
}
