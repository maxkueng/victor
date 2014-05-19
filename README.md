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
