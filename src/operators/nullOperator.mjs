/**
 * @file null オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * null オペレータ
 * @operator
 */
const nullOperator = {
  arg: 0,
  /**
   * null を返します
   * @returns {null}
   */
  body: () => null
}

export default nullOperator
