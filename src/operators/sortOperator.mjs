/**
 * @file ソートオペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * ソートオペレータ
 * @operator
 */
const sortOperator = {
  arg: 1,
  /**
   * 配列の値をソートした結果を返します
   * @param {Array} p1
   * @returns {Array} - ソートした結果
   */
  body: p1 => [...p1].sort()
}

export default sortOperator
