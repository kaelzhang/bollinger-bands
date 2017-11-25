import test from 'ava'
import boll from '../src'

import {
  ma
} from 'moving-averages'

import sd from 's-deviation'


const datum = [1, 2, 4, 8]
const size = 2
const times = 2

const expect = {
  upper: [, 2.5, 5, 10],
  middle: [, 1.5, 3, 6],
  lower: [, 0.5, 1, 2]
}

;[
  {
    d: 'normal, default times, no options',
    datum,
    size,
    expect
  },

  {
    d: 'options.ma',
    datum,
    size: 2,
    expect,
    options: {
      ma: ma(datum, size)
    }
  },

  {
    d: 'options.sd',
    datum,
    size: 2,
    expect,
    options: {
      sd: sd(datum, size)
    }
  }

].forEach(({
  d,
  datum,
  size,
  times,
  expect,
  options
}) => {

  test(d, async t => {
    const result = options
      ? boll(datum, size, times, options)
      : boll(datum, size, times)

    t.deepEqual(result, expect)
  })
})
