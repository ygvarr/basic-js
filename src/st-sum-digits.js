import { NotImplementedError } from '../extensions/index.js'

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented')
  const func = num => {
    let res = String(num)
      .split('')
      .map(num => Number(num))
      .reduce((a, c) => a + c)
    return res > 9 ? func(res) : res
  }
  return func(n)
}
