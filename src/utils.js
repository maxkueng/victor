/* eslint import/prefer-default-export: "off" */
/* @flow */

function callMethod(source: Object, func: Function, ...args: any[]): any {
  const funcArgs = [
    {
      x: source.x,
      y: source.y,
    },
    ...args,
  ];

  return func(...funcArgs);
}

export {
  callMethod,
};
