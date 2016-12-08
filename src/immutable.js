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
    return ImmutableVictor.fromObject(lib.add(this.toObject(), v));
  }

  addX(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.addX(this.toObject(), v));
  }

  addY(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.addY(this.toObject(), v));
  }

  subtract(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.subtract(this.toObject(), v));
  }

  subtractX(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.subtractX(this.toObject(), v));
  }

  subtractY(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.subtractY(this.toObject(), v));
  }

  multiply(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.multiply(this.toObject(), v));
  }

  multiplyX(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.multiplyX(this.toObject(), v));
  }

  multiplyY(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.multiplyY(this.toObject(), v));
  }

  divide(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.divide(this.toObject(), v));
  }

  divideX(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.divideX(this.toObject(), v));
  }

  divideY(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(lib.divideY(this.toObject(), v));
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

  distance(v: ImmutableVictor): ImmutableVictor {
    return lib.distance(this.toObject(), v);
  }

  distanceX(v: ImmutableVictor): ImmutableVictor {
    return lib.distanceX(this.toObject(), v);
  }

  distanceY(v: ImmutableVictor): ImmutableVictor {
    return lib.distanceY(this.toObject(), v);
  }

  distanceSquared(v: ImmutableVictor): ImmutableVictor {
    return lib.distanceSquared(this.toObject(), v);
  }
}

export default ImmutableVictor;
