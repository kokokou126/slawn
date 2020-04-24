/**
 * @file 大なりオペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * 大なりオペレータ
 * @operator
 */
const greaterOperator = {
  arg: 2,
  /**
   * 左辺と右辺を比較して、
   * 左辺が右辺を超えたら true を、
   * そうでなければ false を返します
   * @param {number} p1 右辺
   * @param {number} p2 - 左辺
   * @returns {boolean}
   */
  body: (p1, p2) => p2 > p1
}

export default greaterOperator
