/* @flow */

import { version } from '../package.json';

class BaseVictor {

  static VERSION: string;
  _x: number;
  _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
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
