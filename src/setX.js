/* @flow */

export default function setX(a: Vector, x: number): Vector {
  return {
    x,
    y: a.y,
  };
}
