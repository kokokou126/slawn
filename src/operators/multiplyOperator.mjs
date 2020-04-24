/**
 * @file 乗算オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * 乗算オペレータ
 * @operator
 */
const multiplyOperator = {
  arg: 2,
  /**
   * 乗算した結果を返します
   * @param {number} p1 - 右辺
   * @param {number} p2 - 左辺
   */
  body: (p1, p2) => p2 * p1
}

export default multiplyOperator
