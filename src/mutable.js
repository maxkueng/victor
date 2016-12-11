/* @flow */

import * as lib from './lib';
import BaseVictor, { setComponents } from './base';

import type { IVictor, VectorComponent } from './flowTypes';

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

  add(v: IVictor): MutableVictor {
    return setComponents(this, lib.add(this.toObject(), v.toObject()));
  }

  addX(v: IVictor): MutableVictor {
    return setComponents(this, lib.addX(this.toObject(), v.toObject()));
  }

  addY(v: IVictor): MutableVictor {
    return setComponents(this, lib.addY(this.toObject(), v.toObject()));
  }

  subtract(v: IVictor): MutableVictor {
    return setComponents(this, lib.subtract(this.toObject(), v.toObject()));
  }

  subtractX(v: IVictor): MutableVictor {
    return setComponents(this, lib.subtractX(this.toObject(), v.toObject()));
  }

  subtractY(v: IVictor): MutableVictor {
    return setComponents(this, lib.subtractY(this.toObject(), v.toObject()));
  }

  multiply(v: IVictor): MutableVictor {
    return setComponents(this, lib.multiply(this.toObject(), v.toObject()));
  }

  multiplyX(v: IVictor): MutableVictor {
    return setComponents(this, lib.multiplyX(this.toObject(), v.toObject()));
  }

  multiplyY(v: IVictor): MutableVictor {
    return setComponents(this, lib.multiplyY(this.toObject(), v.toObject()));
  }

  divide(v: IVictor): MutableVictor {
    return setComponents(this, lib.divide(this.toObject(), v.toObject()));
  }

  divideX(v: IVictor): MutableVictor {
    return setComponents(this, lib.divideX(this.toObject(), v.toObject()));
  }

  divideY(v: IVictor): MutableVictor {
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

  normalize(): MutableVictor {
    return setComponents(this, lib.normalize(this.toObject()));
  }

  setLength(newLength: number): MutableVictor {
    return setComponents(this, lib.setLength(this.toObject(), newLength));
  }

  addLength(addedLength: number): MutableVictor {
    return setComponents(this, lib.addLength(this.toObject(), addedLength));
  }
}

/* :: (MutableVictor: Class<IVictor>); */

export default MutableVictor;
