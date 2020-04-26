/**
 * @file べき乗オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * べき乗オペレータ
 * @operator
 */
const powerOperator = {
  arg: 2,
  /**
   * べき乗した結果を返します
   * @param {number} p1 - 右辺
   * @param {number} p2 - 左辺
   */
  body: (p1, p2) => p2 ** p1
}

export default powerOperator
