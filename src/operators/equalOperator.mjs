/**
 * @file 等価オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * 等価オペレータ
 * @operator
 */
const equalOperator = {
  arg: 2,
  /**
   * 等しければ true を、そうでなければ、
   * false を返します
   * @param {string|number|boolean} p1
   * @param {string|number|boolean} p2
   * @returns {boolean}
   */
  body: (p1, p2) => p2 === p1
}

export default equalOperator
