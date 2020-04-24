/**
 * @file OR オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * OR オペレータ
 * @operator
 */
const orOperator = {
  arg: 2,
  /**
   * 左辺を評価し、false ならば右辺を、
   * true ならば左辺を返します
   * @param {boolean} p1 - 右辺
   * @param {boolean} p2 - 左辺
   */
  body: (p1, p2) => (p2 || p1)
}

export default orOperator
