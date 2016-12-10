/* @flow */

import * as lib from './lib';
import BaseVictor, { setComponents } from './base';

import type { VectorComponent } from './flowTypes';

class MutableVictor extends BaseVictor {
  set(x: VectorComponent, y: VectorComponent): MutableVictor {
    return setComponents(this, lib.set(this.toObject(), x, y));
  }

  setX(x: VectorComponent): MutableVictor {
    return setComponents(this, lib.setX(this.toObject(), x));
  }

  setY(y: VectorComponent): MutableVictor {
    return setComponents(this, lib.setY(this.toObject(), y));
  }

  add(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.add(this.toObject(), v.toObject()));
  }

  addX(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.addX(this.toObject(), v.toObject()));
  }

  addY(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.addY(this.toObject(), v.toObject()));
  }

  subtract(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.subtract(this.toObject(), v.toObject()));
  }

  subtractX(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.subtractX(this.toObject(), v.toObject()));
  }

  subtractY(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.subtractY(this.toObject(), v.toObject()));
  }

  multiply(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.multiply(this.toObject(), v.toObject()));
  }

  multiplyX(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.multiplyX(this.toObject(), v.toObject()));
  }

  multiplyY(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.multiplyY(this.toObject(), v.toObject()));
  }

  divide(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.divide(this.toObject(), v.toObject()));
  }

  divideX(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.divideX(this.toObject(), v.toObject()));
  }

  divideY(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.divideY(this.toObject(), v.toObject()));
  }

  invert(): MutableVictor {
    return setComponents(this, lib.invert(this.toObject()));
  }

  invertX(): MutableVictor {
    return setComponents(this, lib.invertX(this.toObject()));
  }

  invertY(): MutableVictor {
    return setComponents(this, lib.invertY(this.toObject()));
  }

  distance(v: MutableVictor): number {
    return lib.distance(this.toObject(), v.toObject());
  }

  distanceX(v: MutableVictor): number {
    return lib.distanceX(this.toObject(), v.toObject());
  }

  distanceY(v: MutableVictor): number {
    return lib.distanceY(this.toObject(), v.toObject());
  }

  distanceSquared(v: MutableVictor): number {
    return lib.distanceSquared(this.toObject(), v.toObject());
  }

  length(): number {
    return lib.length(this.toObject());
  }

  lengthSquared(): number {
    return lib.lengthSquared(this.toObject());
  }

  isLeftOf(v: MutableVictor): boolean {
    return lib.isLeftOf(this.toObject(), v.toObject());
  }

  isRightOf(v: MutableVictor): boolean {
    return lib.isRightOf(this.toObject(), v.toObject());
  }

  isAbove(v: MutableVictor): boolean {
    return lib.isAbove(this.toObject(), v.toObject());
  }

  isBelow(v: MutableVictor): boolean {
    return lib.isBelow(this.toObject(), v.toObject());
  }

  isWithin(bottomLeft: MutableVictor, topRight: MutableVictor): boolean {
    return lib.isWithin(this.toObject(), bottomLeft.toObject(), topRight.toObject());
  }
}

export default MutableVictor;
