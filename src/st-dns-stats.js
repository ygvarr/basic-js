import { NotImplementedError } from '../extensions/index.js'

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented')
  const obj = {}
  let a
  for (let i = 0; i < domains.length; i++) {
    a = domains[i].split('.').reverse()
    a[0] = '.'.concat(a[0])
    for (let j = 0; j < a.length; j++) {
      if (a[j + 1]) {
        a[j + 1] = a[j].concat('.', a[j + 1])
      }
      Object.prototype.hasOwnProperty.call(obj, a[j])
        ? (obj[a[j]] += 1)
        : (obj[a[j]] = 1)
    }
  }
  return obj
}
