/**
 * @file 小なりオペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * 小なりオペレータ
 * @operator
 */
const lessOperator = {
  arg: 2,
  /**
   * 左辺と右辺を比較して、
   * 左辺が右辺未満ならば true を、
   * そうでなければ false を返します
   * @param {number} p1 右辺
   * @param {number} p2 - 左辺
   * @returns {boolean}
   */
  body: (p1, p2) => p2 < p1
}

export default lessOperator
