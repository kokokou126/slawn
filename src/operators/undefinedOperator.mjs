/**
 * @file undefined オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * undefined オペレータ
 * @operator
 */
const undefinedOperator = {
  arg: 0,
  /**
   * undefined を返します
   * @returns {undefined}
   */
  body: () => undefined
}

export default undefinedOperator
