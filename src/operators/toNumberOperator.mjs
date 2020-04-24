/**
 * @file toNumber オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * toNumber オペレータ
 * @operator
 */
const toNumberOperator = {
  arg: 1,
  /**
   * 数値に変換します
   * @param {string} p1
   * @returns {number}
   */
  body: p1 => parseInt(p1)
}

export default toNumberOperator
