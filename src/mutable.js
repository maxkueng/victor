/* @flow */

import * as lib from './lib';
import { callMethod } from './utils';
import BaseVictor, { setComponents } from './base';

import type { VectorComponent } from './flowTypes';

class Victor extends BaseVictor {
  setX(x: VectorComponent): Victor {
    return setComponents(this, callMethod(this, lib.setX, x));
  }

  setY(y: VectorComponent): Victor {
    return setComponents(this, callMethod(this, lib.setY, y));
  }

  add(v: Victor): Victor {
    return setComponents(this, callMethod(this, lib.add, v));
  }
}

export default Victor;
