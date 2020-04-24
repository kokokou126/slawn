/**
 * @file 平均オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * 平均オペレータ
 * @operator
 */
const averageOperator = {
  arg: 1,
  /**
   * 数列の平均を返します
   * @param {number[]} p1 - 数列
   * @returns {number} - 平均
   */
  body: p1 => p1.reduce((p, v) => p + v) / p1.length
}

export default averageOperator
