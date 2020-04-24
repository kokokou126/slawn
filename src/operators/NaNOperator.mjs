/**
 * @file NaN オペレータです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @type {import("../engine.mjs").Operator}
/**
 * NaN オペレータ
 * @operator
 */
const NaNOperator = {
  arg: 0,
  /**
   * NaN を返します
   * @returns {NaN}
   */
  body: () => NaN
}

export default NaNOperator
