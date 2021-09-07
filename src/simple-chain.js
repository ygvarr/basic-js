import { NotImplementedError } from '../extensions/index.js'

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented')
    return this.chain.length
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented')
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented')
    if (
      typeof position != 'number' ||
      position < 1 ||
      position > this.getLength()
    ) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    } else {
      this.chain.splice(position - 1, 1)
    }
    return this
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented')
    this.chain.reverse()
    return this
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented')
    const newChain = this.chain.join('~~')
    this.chain = []
    return newChain
  },
}
