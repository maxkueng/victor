/* @flow */

import * as lib from './lib';
import { callMethod } from './utils';
import BaseVictor from './base';

import type { VectorComponent } from './flowTypes';

class ImmutableVictor extends BaseVictor {
  setX(x: VectorComponent): ImmutableVictor {
    return ImmutableVictor.fromObject(callMethod(this, lib.setX, x));
  }

  setY(y: VectorComponent): ImmutableVictor {
    return ImmutableVictor.fromObject(callMethod(this, lib.setX, y));
  }

  add(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(callMethod(this, lib.add, v));
  }

  addX(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(callMethod(this, lib.addX, v));
  }

  addY(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(callMethod(this, lib.addY, v));
  }
}

export default ImmutableVictor;
