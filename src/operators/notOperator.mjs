/**
 * @file NOT オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * NOT オペレータ
 * @operator
 */
const notOperator = {
  arg: 1,
  /**
   * 真偽値を反転した値を返します
   * @param {boolean} p1
   * @returns {boolean} - 反転した値
   */
  body: p1 => !p1
}

export default notOperator
