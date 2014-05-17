var vec1 = new Victor(100, 200);
vec1.toString();
// => x: 100, y:200

var vec2 = Victor(100, 200);
vec2.toString();
// => x: 100, y:200

var vec3 = Victor.fromArray([100, 200]);
vec3.toString();
// => x: 100, y:200

var vec4 = Victor.fromObject({ x: 100, y: 200 });
vec4.toString();
// => x: 100, y:200
