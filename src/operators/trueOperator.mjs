/**
 * @file true オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * true オペレータ
 * @operator
 */
const trueOperator = {
  arg: 0,
  /**
   * true を返します
   * @returns {true}
   */
  body: () => true
}

export default trueOperator
