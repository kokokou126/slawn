/**
 * @file 不等価オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * 不等価オペレータ
 * @operator
 */
const notEqualOperator = {
  arg: 2,
  /**
   * 等しくなければ true を、等しければ、
   * false を返します
   * @param {string|number|boolean} p1
   * @param {string|number|boolean} p2
   * @returns {boolean}
   */
  body: (p1, p2) => p2 !== p1
}

export default notEqualOperator
