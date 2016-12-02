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

    this._x = x;
    this._y = y;
  constructor(x: VectorComponent, y: VectorComponent) {
  }

  get x(): VectorComponent {
    return this._x;
  }

  get y(): VectorComponent {
    return this._y;
  }

  static fromObject(obj) {
    return new this(obj.x, obj.y);
  }

  static fromArray(arr) {
    return new this(arr[0], arr[1]);
  }
}

BaseVictor.VERSION = version;

export default BaseVictor;
