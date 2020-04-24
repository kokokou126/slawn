/**
 * @file 加算オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * 加算オペレータ
 * @operator
 */
const addOperator = {
  arg: 2,
  /**
   * 加算を行い結果を返します
   * @param {number} p1
   * @param {number} p2
   * @returns {number}
   */
  body: (p1, p2) => p2 + p1
}

export default addOperator
