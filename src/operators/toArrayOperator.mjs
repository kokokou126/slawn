/**
 * @file toArray オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * toArray オペレータ
 * @operator
 */
const toArrayOperator = {
  arg: 1,
  /**
   * 配列に変換します
   * @param {any} p1
   * @returns {Array}
   */
  body: p1 => [p1]
}

export default toArrayOperator
