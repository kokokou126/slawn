/**
 * @file Infinity オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * Infinity オペレータ
 * @operator
 */
const InfinityOperator = {
  arg: 0,
  /**
   * Infinity を返します
   * @returns {Infinity}
   */
  body: () => Infinity
}

export default InfinityOperator
