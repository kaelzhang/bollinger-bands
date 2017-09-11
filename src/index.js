import deviation from 's-deviation'

import {
  simple
} from 'moving-averages'

import {
  add,
  sub,
  mul
} from 'math-array'


export default (datum, size = 20, times = 2, {
  ma,
  sd
} = {}) => {

  ma = ma || simple.periods(datum, size)
  sd = sd || deviation(datum, size)

  const timesSd = mul(sd, times)

  return {
    upper: add(ma, timesSd),
    mid: ma,
    lower: sub(ma, timesSd)
  }
}
