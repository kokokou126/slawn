/**
 * @file false オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * false オペレータ
 * @operator
 */
const falseOperator = {
  arg: 0,
  /**
   * false を返します
   * @returns {boolean}
   */
  body: () => false
}

export default falseOperator
