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

  subtract(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(callMethod(this, lib.subtract, v));
  }

  subtractX(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(callMethod(this, lib.subtractX, v));
  }

  subtractY(v: ImmutableVictor): ImmutableVictor {
    return ImmutableVictor.fromObject(callMethod(this, lib.subtractY, v));
  }

  distance(v: ImmutableVictor): ImmutableVictor {
    return callMethod(this, lib.distance, v);
  }

  distanceSquared(v: ImmutableVictor): ImmutableVictor {
    return callMethod(this, lib.distanceSquared, v);
  }
}

export default ImmutableVictor;
