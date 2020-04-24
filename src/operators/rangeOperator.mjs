/**
 * @file range オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * range オペレータ
 * @operator
 */
const rangeOperator = {
  arg: 2,
  /**
   * 連番の数列を返します
   * @param {number} p1 - 最大値
   * @param {number} p2 - 最小値
   * @returns {number[]} - 連番の数列
   */
  body: (p1, p2) => [...Array(p1 - p2 + 1).keys()].map(v => v + p2)
}

export default rangeOperator
