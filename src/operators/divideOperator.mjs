/**
 * @file 除算オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * 除算オペレータ
 * @operator
 */
const divideOperator = {
  arg: 2,
  /**
   * 除算を行い結果を返します
   * @param {number} p1
   * @param {number} p2
   * @returns {number}
   */
  body: (p1, p2) => p2 / p1
}

export default divideOperator
