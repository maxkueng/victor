/* @flow */

export type VectorComponent = number;

export type Vector = {
  x: VectorComponent;
  y: VectorComponent;
};

export interface IVictor {
  _x: VectorComponent;
  _y: VectorComponent;

  set(x: VectorComponent, y: VectorComponent): IVictor;
  setX(x: VectorComponent): IVictor;
  setY(y: VectorComponent): IVictor;
  add(v: IVictor): IVictor;
  addX(v: IVictor): IVictor;
  addY(v: IVictor): IVictor;
  subtract(v: IVictor): IVictor;
  subtractX(v: IVictor): IVictor;
  subtractY(v: IVictor): IVictor;
  multiply(v: IVictor): IVictor;
  multiplyX(v: IVictor): IVictor;
  multiplyY(v: IVictor): IVictor;
  divide(v: IVictor): IVictor;
  divideX(v: IVictor): IVictor;
  divideY(v: IVictor): IVictor;
  invert(): IVictor;
  invertX(): IVictor;
  invertY(): IVictor;
  normalize(v: IVictor): IVictor;
  dot(v: IVictor): number;
  cross(v: IVictor): number;
  distance(v: IVictor): number;
  distanceX(v: IVictor): number;
  distanceY(v: IVictor): number;
  distanceSquared(v: IVictor): number;
  length(): number;
  lengthSquared(): number;
  isLeftOf(v: IVictor): boolean;
  isRightOf(v: IVictor): boolean;
  isAbove(v: IVictor): boolean;
  isBelow(v: IVictor): boolean;
  isWithin(bottomLeft: IVictor, topRight: IVictor): boolean;
  toObject(): Object;
  toArray(): VectorComponent[];
  toString(): string;
}
