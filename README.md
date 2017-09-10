[![Build Status](https://travis-ci.org/kaelzhang/bollinger-bands.svg?branch=master)](https://travis-ci.org/kaelzhang/bollinger-bands)
[![Coverage](https://codecov.io/gh/kaelzhang/bollinger-bands/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/bollinger-bands)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/bollinger-bands?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/bollinger-bands)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/bollinger-bands.svg)](http://badge.fury.io/js/bollinger-bands)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/bollinger-bands.svg)](https://www.npmjs.org/package/bollinger-bands)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/bollinger-bands.svg)](https://david-dm.org/kaelzhang/bollinger-bands)
-->

# bollinger-bands

Fintach math utility to calculate [bollinger bands](https://en.wikipedia.org/wiki/Bollinger_Bands)

## Install

```sh
$ npm install bollinger-bands
```

## Usage

```js
import boll from 'bollinger-bands'
```

## boll(datum, n, k)

- **datum** `Array.<Number>` the collection of data
- **n** `Number=20` the period size, defaults to `20`
- **k** `Number=2` the times of standard deviation between the upper band and the moving average.

Returns `Array.<Band>` the array of the `Band` object.

### struct `Band`

- **upper** `Number` the value of the upper band
- **ma** `Number` the moving average
- **lower** `Number` the value of the lower band

## License

MIT
