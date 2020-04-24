/**
 * @file summary オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * summary オペレータ
 * @operator
 */
const summaryOperator = {
  arg: 1,
  /**
   * 数列の合計を返します
   * @param {number[]} p1 - 数列
   * @returns {number}
   */
  body: p1 => p1.reduce((p, v) => p + v)
}

export default summaryOperator
