![Victor](./artwork/logo.png)
=============================

[![Build Status](https://secure.travis-ci.org/maxkueng/victor.png?branch=master)](http://travis-ci.org/maxkueng/victor)

A Javascript 2D Vector Maths Library, built using the UMD standards, so you can use it as a global object or with any module loader. It works in both Node.js and the browser.

Check out the website for [documentation](http://victorjs.org/).

## Installation

### Node.js / Browserify

```bash
npm install victor --save
```

```javascript
var Victor = require('victor');
var vec = new Victor(42, 1337);
```

### Bower

```bash
bower install victor --save
```

### Global object

Include the pre-built script.

```html
<script src="./build/victor.js"></script>
<script>
var vec = new Victor(42, 1337);
</script>
```

## Build & test

```bash
npm run build
```

```bash
npm test
```

## Contributors

Ordered by date of first contribution. [Auto-generated](https://github.com/dtrejo/node-authors) on Mon, 31 Aug 2015 13:08:12 GMT.

- [Max Kueng](https://github.com/maxkueng) aka `maxkueng`
- [George Crabtree](https://github.com/supercrabtree) aka `supercrabtree`
- [Michel.Ypma](https://github.com/MichelYpma) aka `MichelYpma`
- [Chris Pearce](https://github.com/Chrisui) aka `Chrisui`
- [Beau Gunderson](https://github.com/beaugunderson) aka `beaugunderson`
- [René Bischoff](https://github.com/Fjandin) aka `Fjandin`
- [Chris Ertel](https://github.com/chrisrertel) aka `chrisrertel`
- [Heikki Ylönen](https://github.com/heikki) aka `heikki`
- [Joonas Salmela](https://github.com/undefined) aka `undefined`
- [Moritz Rebbert](https://github.com/ztiromoritz) aka `ztiromoritz`

## License

MIT
