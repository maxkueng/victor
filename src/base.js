/* eslint no-underscore-dangle: "off" */
/* @flow */

import { version } from '../package.json';

class BaseVictor {
import type { VectorComponent, Vector } from './flowTypes';

  static VERSION: string;

  addX: Function;
  addY: Function;
  add: Function;
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

  static fromObject(obj: Vector): this {
    return new this(obj.x, obj.y);
  }

  static fromArray(arr: VectorComponent[]) {
    return new this(arr[0], arr[1]);
  }
}

BaseVictor.VERSION = version;

export default BaseVictor;
