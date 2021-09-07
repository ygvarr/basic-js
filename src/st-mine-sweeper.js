import { NotImplementedError } from '../extensions/index.js'

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented')
  const mines = []
  for (let i = 0; i < matrix.length; i++) {
    mines[i] = matrix[i].slice()
  }
  for (let i = 0; i < mines.length; i++) {
    for (let j = 0; j < mines[i].length; j++) {
      mines[i][j] = 0
      if (typeof matrix[i - 1] !== 'undefined') {
        if (matrix[i - 1][j - 1] === true) {
          mines[i][j]++
        }
        if (matrix[i - 1][j] === true) {
          mines[i][j]++
        }
        if (matrix[i - 1][j + 1] === true) {
          mines[i][j]++
        }
      }
      if (matrix[i][j - 1] === true) {
        mines[i][j]++
      }
      if (matrix[i][j + 1] === true) {
        mines[i][j]++
      }
      if (typeof matrix[i + 1] !== 'undefined') {
        if (matrix[i + 1][j - 1] === true) {
          mines[i][j]++
        }
        if (matrix[i + 1][j] === true) {
          mines[i][j]++
        }
        if (matrix[i + 1][j + 1] === true) {
          mines[i][j]++
        }
      }
    }
  }
  return mines
}
