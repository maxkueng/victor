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

const methodTypes = require('../src/method-types').default;

const outputBaseDir = path.resolve('build');

const libEntries = Object.keys(methodTypes)
  .map(methodName => path.resolve('src', `${methodName}.js`))
  .concat(path.resolve('src', 'lib.js'));

const mainEntries = [
  path.resolve('src', 'immutable.js'),
  path.resolve('src', 'mutable.js'),
];

function makeBundle(entry, { outputDir, external = [], format = 'cjs', extraPlugins = [] }) {
  const entryData = [].concat(entry);
  const [entryPath, entryOutputFilename] = entryData;
  const entryFilename = path.basename(entryPath);
  const outputFilename = entryOutputFilename || entryFilename;

  const notSelfExternal = external
    .filter(externalPath => path.resolve(entryPath) !== path.resolve(externalPath));

  return rollup({
    external: notSelfExternal,
    entry: entryPath,
    plugins: [
      json(),
      babel({
        babelrc: false,
        presets: [
          'es2015-rollup',
        ],
      }),
    ].concat(extraPlugins),
  })
    .then((bundle) => {
      console.log(`${format} bundle: ${entryFilename} » ${outputFilename}`);

      return bundle.write({
        format,
        moduleName: 'Victor',
        sourceMap: false,
        dest: path.join(outputDir, outputFilename),
      });
    });
}

function makeNodeBundle(entry) {
  makeBundle(entry, {
    external: libEntries,
    outputDir: path.join(outputBaseDir, 'node'),
    format: 'cjs',
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
Promise.map(mainEntries, makeBrowserBundle);
Promise.map(mainEntries, makeMinifiedBrowserBundle);
