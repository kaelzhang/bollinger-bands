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

Fintach math utility to calculate [bollinger bands](https://en.wikipedia.org/wiki/Bollinger_Bands).

## Install

```sh
$ npm install bollinger-bands
```

## Usage

```js
import boll from 'bollinger-bands'

boll([1, 2, 4, 8], 2, 2)
// {
//   upper: [, 2.5, 5, 10],
//   mid  : [, 1.5, 3, 6],
//   lower: [, 0.5, 1, 2]
// }
```

## boll(datum, size, times, options)

- **datum** `Array.<Number>` the collection of data
- **size** `Number=20` the period size, defaults to `20`
- **times** `Number=2` the times of standard deviation between the upper band and the moving average.
- **options** `Object=` optional options
  - ma `Array.<Number>=` the moving averages of the provided `datum` and period `size`. This option is used to prevent duplicate calculation of moving average.
  - sd `Array.<Number>=` the standard average of the provided `datum` and period `size`

Returns `Array.<Band>` the array of the `Band` object.

### struct `Band`

- **upper** `Number` the value of the upper band
- **mid** `Number` the value middle band (moving average)
- **lower** `Number` the value of the lower band

## Related Fintech Modules

- [moving-averages](https://www.npmjs.com/package/moving-averages): The complete collection of utility methods for [Moving average](https://en.wikipedia.org/wiki/Moving_average).
- [s-deviation](https://www.npmjs.com/package/s-deviation): Math utility to calculate standard deviations.

## License

MIT
