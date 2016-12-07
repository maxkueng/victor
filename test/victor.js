import { assert } from 'chai';
import testClass from './helpers/test-class';
import ImmutableVictor from '../src/immutable';
import MutableVictor from '../src/mutable';

function checkImmutable(v1, res) {
  assert.instanceOf(res, ImmutableVictor);
  assert(v1 !== res, 'return a new instance');
}

function checkMutable(v1, res) {
  assert.instanceOf(res, MutableVictor);
  assert(v1 === res, 'return the same instance');
}

testClass(ImmutableVictor, 'Victor (immutable, source)', [checkImmutable]);
testClass(MutableVictor, 'Victor (mutable, source)', [checkMutable]);
