import { NotImplementedError } from '../extensions/index.js'

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(flexMachine) {
    this.machine = flexMachine === false
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented')
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    message = message.toUpperCase()
    key = key.toUpperCase()
    let encrypted = ''
    let convertedKey = ''
    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) == -1) {
        convertedKey += message[i]
      } else {
        if (j >= key.length) {
          j = 0
        }
        convertedKey += key[j]
        j++
      }
    }
    for (let i = 0; i < message.length; i++) {
      let shift =
        this.alphabet.indexOf(message[i]) +
        this.alphabet.indexOf(convertedKey[i])
      if (this.alphabet.indexOf(message[i]) == -1) {
        encrypted += message[i]
      } else if (shift <= 25) {
        encrypted += this.alphabet[shift]
      } else {
        encrypted += this.alphabet[shift - 26]
      }
    }
    if (this.machine) {
      return encrypted.split('').reverse().join('')
    }
    return encrypted
  }
  decrypt(encryptedMessage, key) {
    // throw new NotImplementedError('Not implemented')
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!')
    }
    encryptedMessage = encryptedMessage.toUpperCase()
    key = key.toUpperCase()
    let decrypted = ''
    let convertedKey = ''
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (this.alphabet.indexOf(encryptedMessage[i]) == -1) {
        convertedKey += encryptedMessage[i]
      } else {
        if (j >= key.length) {
          j = 0
        }
        convertedKey += key[j]
        j++
      }
    }
    for (let i = 0; i < encryptedMessage.length; i++) {
      let shift =
        this.alphabet.indexOf(encryptedMessage[i]) -
        this.alphabet.indexOf(convertedKey[i])
      if (this.alphabet.indexOf(encryptedMessage[i]) == -1) {
        decrypted += encryptedMessage[i]
      } else if (shift < 0) {
        decrypted += this.alphabet[shift + 26]
      } else {
        decrypted += this.alphabet[shift]
      }
    }
    if (this.machine) {
      return decrypted.split('').reverse().join('')
    }
    return decrypted
  }
}
