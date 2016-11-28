import * as lib from './lib';
import methodTypes from './method-types';
import BaseVictor from './base';

export default class Victor extends BaseVictor {
}

function addManipulationMethod(proto, name, method) {
  const p = proto;

  p[name] = function add(...args) {
    const funcArgs = [{
      x: this.x,
      y: this.y,
    }].concat(args);

    const { x, y } = method(...funcArgs);

    this._x = x;
    this._y = y;

    return this;
  };
}

function addProductMethod(proto, name, method) {
  const p = proto;

  p[name] = function add(...args) {
    const funcArgs = [{
      x: this.x,
      y: this.y,
    }].concat(args);

    return method(...funcArgs);
  };
}

Object.keys(methodTypes)
  .filter(methodName => methodTypes[methodName] === 'manipulation')
  .forEach((methodName) => {
    addManipulationMethod(Victor.prototype, methodName, lib[methodName]);
  });

Object.keys(methodTypes)
  .filter(methodName => methodTypes[methodName] === 'product')
  .forEach((methodName) => {
    addProductMethod(Victor.prototype, methodName, lib[methodName]);
  });
