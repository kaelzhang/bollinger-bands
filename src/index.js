import deviation from 's-deviation'

import {
  ma
} from 'moving-averages'

import {
  add,
  sub,
  mul
} from 'math-array'


export default (datum, size = 20, times = 2, {
  ma: avg,
  sd
} = {}) => {

  avg = avg || ma(datum, size)
  sd = sd || deviation(datum, size)

  const timesSd = mul(sd, times)

  return {
    upper: add(avg, timesSd),
    mid: avg,
    lower: sub(avg, timesSd)
  }
}
