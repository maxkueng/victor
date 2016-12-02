/* @flow */

import * as lib from './lib';
import { callMethod } from './utils';
import BaseVictor from './base';

import type { VectorComponent } from './flowTypes';

class Victor extends BaseVictor {
  setX(x: VectorComponent): Victor {
    return Victor.fromObject(callMethod(this, lib.setX, x));
  }

  setY(y: VectorComponent): Victor {
    return Victor.fromObject(callMethod(this, lib.setX, y));
  }

  add(v: Victor): Victor {
    return Victor.fromObject(callMethod(this, lib.add, v));
  }

  addX(v: Victor): Victor {
    return Victor.fromObject(callMethod(this, lib.addX, v));
  }

  addY(v: Victor): Victor {
    return Victor.fromObject(callMethod(this, lib.addY, v));
  }
}

export default Victor;
