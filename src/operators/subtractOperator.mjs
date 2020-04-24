/**
 * @file 減算オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * 減算オペレータ
 * @operator
 */
const subtractOperator = {
  arg: 2,
  /**
   * 減算した結果を返します
   * @param {number} p1 - 右辺
   * @param {number} p2 - 左辺
   * @returns {number}
   */
  body: (p1, p2) => p2 - p1
}

export default subtractOperator
