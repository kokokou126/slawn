/**
 * @file 小なりイコールオペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * 小なりイコールオペレータ
 * @operator
 */
const lessEqualOperator = {
  arg: 2,
  /**
   * 左辺と右辺を比較して、
   * 左辺が右辺以下ならば true を、
   * そうでなければ false を返します
   * @param {number} p1 右辺
   * @param {number} p2 - 左辺
   * @returns {boolean}
   */
  body: (p1, p2) => p2 <= p1
}

export default lessEqualOperator
