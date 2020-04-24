/**
 * @file reverse オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * reverse オペレータ
 * @operator
 */
const reverseOperator = {
  arg: 1,
  /**
   * 配列を反転した結果を返します
   * @param {Array} p1
   * @returns {Array} - 反転した結果
   */
  body: p1 => [...p1].reverse()
}

export default reverseOperator
