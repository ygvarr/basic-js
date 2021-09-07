import { NotImplementedError } from '../extensions/index.js'

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // throw new NotImplementedError('Not implemented')
  let additional = ''
  let text = ''
  if (!options.repeatTimes) {
    options.repeatTimes = 1
  }
  if (!options.separator) {
    options.separator = '+'
  }
  if (options.addition === undefined) {
    options.addition = ''
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  }
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    additional += options.addition + options.additionSeparator
  }
  additional += options.addition
  for (let i = 1; i < options.repeatTimes; i++) {
    text += str + additional + options.separator
  }
  text += str + additional
  return text
}
