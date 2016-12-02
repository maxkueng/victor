/* @flow */

import * as lib from './lib';
import { callMethod } from './utils';
import BaseVictor, { setComponents } from './base';

import type { VectorComponent } from './flowTypes';

class MutableVictor extends BaseVictor {
  setX(x: VectorComponent): MutableVictor {
    return setComponents(this, callMethod(this, lib.setX, x));
  }

  setY(y: VectorComponent): MutableVictor {
    return setComponents(this, callMethod(this, lib.setY, y));
  }

  add(v: MutableVictor): MutableVictor {
    return setComponents(this, callMethod(this, lib.add, v));
  }

  addX(v: MutableVictor): MutableVictor {
    return setComponents(this, callMethod(this, lib.addX, v));
  }

  addY(v: MutableVictor): MutableVictor {
    return setComponents(this, callMethod(this, lib.addY, v));
  }

  distance(v: MutableVictor): MutableVictor {
    return callMethod(this, lib.distance, v);
  }

  distanceSquared(v: MutableVictor): MutableVictor {
    return callMethod(this, lib.distanceSquared, v);
  }
}

export default MutableVictor;
