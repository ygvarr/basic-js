import { NotImplementedError } from '../extensions/index.js'

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented')
  let str = ''
  if (!Array.isArray(members)) {
    return false
  }
  members = members.filter(n => typeof n == 'string')
  for (let i = 0; i < members.length; i++) {
    members[i] = members[i].trim()
    str += members[i].substring(0, 1)
  }
  return str
    .toLowerCase()
    .split('')
    .sort((x, y) => x.localeCompare(y))
    .join('')
    .toUpperCase()
}
