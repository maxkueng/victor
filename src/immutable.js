/* @flow */

import * as lib from './lib';
import BaseVictor from './base';

import type { VectorComponent } from './flowTypes';

class ImmutableVictor extends BaseVictor {
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

  distance(v: ImmutableVictor): ImmutableVictor {
    return lib.distance(this.toObject(), v);
  }

  distanceSquared(v: ImmutableVictor): ImmutableVictor {
    return lib.distanceSquared(this.toObject(), v);
  }
}

export default ImmutableVictor;
