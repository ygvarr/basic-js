import { NotImplementedError } from '../extensions/index.js'

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented')
  let max = 0
  let arr = String(n).split('')
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1)
    if (Number(arr.join('')) > max) {
      max = Number(arr.join(''))
    }
    arr = String(n).split('')
  }
  return max
}
