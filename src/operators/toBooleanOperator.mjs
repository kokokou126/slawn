/**
 * @file toBoolean オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * toBoolean オペレータ
 * @operator
 */
const toBooleanOperator = {
  arg: 1,
  /**
   * 真偽値に変換します
   * @param {any} p1
   * @returns {boolean}
   */
  body: p1 => !!p1
}

export default toBooleanOperator
