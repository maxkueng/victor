/* eslint no-underscore-dangle: "off" */
/* @flow */

import * as lib from './lib';
import { version } from '../package.json';

import type { IVictor, VectorComponent, Vector } from './flowTypes';

class BaseVictor {
  static VERSION: string;

  _x: VectorComponent;
  _y: VectorComponent;

  constructor(x: VectorComponent, y: VectorComponent) {
    this._x = x || 0;
    this._y = y || 0;
  }

  get x(): VectorComponent {
    return this._x;
  }

  get y(): VectorComponent {
    return this._y;
  }

  distance(v: IVictor): number {
    return lib.distance(this.toObject(), v.toObject());
  }

  distanceX(v: IVictor): number {
    return lib.distanceX(this.toObject(), v.toObject());
  }

  distanceY(v: IVictor): number {
    return lib.distanceY(this.toObject(), v.toObject());
  }

  distanceSquared(v: IVictor): number {
    return lib.distanceSquared(this.toObject(), v.toObject());
  }

  length(): number {
    return lib.length(this.toObject());
  }

  lengthSquared(): number {
    return lib.lengthSquared(this.toObject());
  }

  isLeftOf(v: IVictor): boolean {
    return lib.isLeftOf(this.toObject(), v.toObject());
  }

  isRightOf(v: IVictor): boolean {
    return lib.isRightOf(this.toObject(), v.toObject());
  }

  isAbove(v: IVictor): boolean {
    return lib.isAbove(this.toObject(), v.toObject());
  }

  isBelow(v: IVictor): boolean {
    return lib.isBelow(this.toObject(), v.toObject());
  }

  isWithin(bottomLeft: IVictor, topRight: IVictor): boolean {
    return lib.isWithin(this.toObject(), bottomLeft.toObject(), topRight.toObject());
  }

  toObject(): Vector {
    return {
      x: this.x,
      y: this.y,
    };
  }

  toArray(): VectorComponent[] {
    return [
      this.x,
      this.y,
    ];
  }

  toString(): string {
    return `x:${this.x}, y:${this.y}`;
  }

  static fromObject({ x, y }: Vector): this {
    return new this(x, y);
  }

  static fromArray([x, y]: VectorComponent[]): this {
    return new this(x, y);
  }
}

BaseVictor.VERSION = version;

function setComponents(target: Object, { x, y }: Vector): Object {
  const t = target;

  t._x = x;
  t._y = y;

  return t;
}

export default BaseVictor;

export {
  setComponents,
};
