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
    return setComponents(this, lib.add(this.toObject(), v));
  }

  addX(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.addX(this.toObject(), v));
  }

  addY(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.addY(this.toObject(), v));
  }

  subtract(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.subtract(this.toObject(), v));
  }

  subtractX(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.subtractX(this.toObject(), v));
  }

  subtractY(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.subtractY(this.toObject(), v));
  }

  multiply(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.multiply(this.toObject(), v));
  }

  multiplyX(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.multiplyX(this.toObject(), v));
  }

  multiplyY(v: MutableVictor): MutableVictor {
    return setComponents(this, lib.multiplyY(this.toObject(), v));
  }

  distance(v: MutableVictor): MutableVictor {
    return lib.distance(this.toObject(), v);
  }

  distanceSquared(v: MutableVictor): MutableVictor {
    return lib.distanceSquared(this.toObject(), v);
  }
}

export default MutableVictor;
