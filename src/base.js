import { version } from '../package.json';

class BaseVictor {

  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  get y() {
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
