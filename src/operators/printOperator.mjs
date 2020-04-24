/**
 * @file print オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * print オペレータ
 * @operator
 */
const printOperator = {
  arg: 1,
  /**
   * コンソールに値を出力します
   * @param {any} p1
   * @returns {null}
   */
  body: p1 => {
    console.log(p1)
    return null
  }
}

export default printOperator
