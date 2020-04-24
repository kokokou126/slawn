/**
 * @file 配列オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * 配列オペレータ
 * @operator
 */
const ArrayOperator = {
  arg: 0,
  /**
   * 配列を返します
   * @returns {Array}
   */
  body: () => []
}

export default ArrayOperator
