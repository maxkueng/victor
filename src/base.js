/* eslint no-underscore-dangle: "off" */
/* @flow */

import { version } from '../package.json';

import type { VectorComponent, Vector } from './flowTypes';

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

  static fromObject(obj: Vector): this {
    return new this(obj.x, obj.y);
  }

  static fromArray(arr: VectorComponent[]): this {
    return new this(arr[0], arr[1]);
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
