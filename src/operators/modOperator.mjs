/**
 * @file 剰余オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * 剰余オペレータ
 * @operator
 */
const modOperator = {
  arg: 2,
  /**
   * 除算を行い、剰余を返します
   * @param {number} p1 - 右辺
   * @param {number} p2 - 左辺
   * @returns {number}
   */
  body: (p1, p2) => p2 % p1
}

export default modOperator
