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
}

export default MutableVictor;
