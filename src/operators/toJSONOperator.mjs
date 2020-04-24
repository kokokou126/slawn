/**
 * @file toJSON オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * toJSON オペレータ
 * @operator
 */
const toJSONOperator = {
  arg: 1,
  /**
   * JSON に変換します
   * @param {string} p1
   * @returns {Object}
   */
  body: p1 => JSON.stringify(p1)
}

export default toJSONOperator
