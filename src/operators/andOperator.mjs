/**
 * @file ANDオペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * ANDオペレータ
 * @operator
 */
const andOperator = {
  arg: 2,
  /**
   * 左辺を評価し、true ならば右辺を、
   * false ならば左辺を返します
   * @param {boolean} p1 - 右辺
   * @param {boolean} p2 - 左辺
   */
  body: (p1, p2) => (p2 && p1)
}

export default andOperator
