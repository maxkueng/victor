require('babel-register')({
  presets: ['es2015'],
});

const path = require('path');
const rollup = require('rollup').rollup;
const Promise = require('bluebird');
const json = require('rollup-plugin-json');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const { minify } = require('uglify-js');
const flow = require('rollup-plugin-flow');
const nodeResolve = require('rollup-plugin-node-resolve');

const sourceDir = path.resolve('src');
const outputBaseDir = path.resolve('build');

const libFilePath = path.join('lib', 'index.js');

const libEntries = Object.keys(require(path.join(sourceDir, libFilePath)))
  .map(methodName => path.join('lib', `${methodName}.js`))
  .concat([path.join(libFilePath)]);

const mainEntries = [
  'index.js',
  'immutable.js',
  'mutable.js',
];

function makeBundle(entry, { outputDir, external = [], format = 'cjs', extraPlugins = [] }) {
  const entryData = [].concat(entry);
  const [ entrySource, entryDest = entrySource ] = entryData;

  const entryPath = path.join(sourceDir, entrySource);
  const outputPath = path.join(outputDir, entryDest);

  const notSelfExternal = external
    .filter(externalPath => path.resolve(entryPath) !== path.resolve(externalPath));

  return rollup({
    external: notSelfExternal,
    entry: entryPath,
    plugins: [
      nodeResolve(),
      json(),
      flow(),
      babel({
        babelrc: false,
        presets: [
          'es2015-rollup',
        ],
      }),
    ].concat(extraPlugins),
  })
    .then((bundle) => {
      console.log(`[${format}] bundle: ${entrySource} » ${entryDest}`);

      return bundle.write({
        format,
        moduleName: 'Victor',
        sourceMap: false,
        dest: outputPath,
      });
    });
}

function makeNodeBundle(entry) {
  makeBundle(entry, {
    external: libEntries
      .concat(mainEntries)
      .map(libEntry => path.join(sourceDir, libEntry)),
    outputDir: path.join(outputBaseDir, 'node'),
    format: 'cjs',
  });
}

function makeEsBundle(entry) {
  makeBundle(entry, {
    external: libEntries
      .concat(mainEntries)
      .map(libEntry => path.join(sourceDir, libEntry)),
    outputDir: path.join(outputBaseDir, 'es2015'),
    format: 'es',
  });
}

function makeBrowserBundle(entry) {
  const entryBasename = path.basename(entry, '.js');
  const outputFilename = `victor.${entryBasename}.js`;

  makeBundle([entry, outputFilename], {
    outputDir: path.join(outputBaseDir, 'browser'),
    format: 'umd',
  });
}

function makeMinifiedBrowserBundle(entry) {
  const entryBasename = path.basename(entry, '.js');
  const outputFilename = `victor.${entryBasename}.min.js`;

  makeBundle([entry, outputFilename], {
    outputDir: path.join(outputBaseDir, 'browser'),
    format: 'umd',
    extraPlugins: [
      uglify({}, minify),
    ],
  });
}

Promise.map(mainEntries.concat(libEntries), makeNodeBundle);
Promise.map(mainEntries.concat(libEntries), makeEsBundle);
Promise.map(mainEntries, makeBrowserBundle);
Promise.map(mainEntries, makeMinifiedBrowserBundle);
