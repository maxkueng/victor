/* @flow */

import * as lib from './lib';
import BaseVictor from './base';

import type { VectorComponent } from './flowTypes';

class ImmutableVictor extends BaseVictor {
  set(x: VectorComponent, y: VectorComponent): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.set(this.toObject(), x, y));
  }

  setX(x: VectorComponent): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.setX(this.toObject(), x));
  }

  setY(y: VectorComponent): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.setY(this.toObject(), y));
  }

  add(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.add(this.toObject(), v.toObject()));
  }

  addX(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.addX(this.toObject(), v.toObject()));
  }

  addY(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.addY(this.toObject(), v.toObject()));
  }

  subtract(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.subtract(this.toObject(), v.toObject()));
  }

  subtractX(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.subtractX(this.toObject(), v.toObject()));
  }

  subtractY(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.subtractY(this.toObject(), v.toObject()));
  }

  multiply(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.multiply(this.toObject(), v.toObject()));
  }

  multiplyX(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.multiplyX(this.toObject(), v.toObject()));
  }

  multiplyY(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.multiplyY(this.toObject(), v.toObject()));
  }

  divide(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.divide(this.toObject(), v.toObject()));
  }

  divideX(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.divideX(this.toObject(), v.toObject()));
  }

  divideY(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.divideY(this.toObject(), v.toObject()));
  }

  invert(): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.invert(this.toObject()));
  }

  invertX(): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.invertX(this.toObject()));
  }

  invertY(): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.invertY(this.toObject()));
  }

  distance(v: ImmutableVictor): number {
    return lib.distance(this.toObject(), v.toObject());
  }

  distanceX(v: ImmutableVictor): number {
    return lib.distanceX(this.toObject(), v.toObject());
  }

  distanceY(v: ImmutableVictor): number {
    return lib.distanceY(this.toObject(), v.toObject());
  }

  distanceSquared(v: ImmutableVictor): number {
    return lib.distanceSquared(this.toObject(), v.toObject());
  }

  length(): number {
    return lib.length(this.toObject());
  }

  lengthSquared(): number {
    return lib.lengthSquared(this.toObject());
  }
}

export default ImmutableVictor;
