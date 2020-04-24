/**
 * @file Slawn カスタムエンジンです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

// @ts-ignore
import Engine from './engine.mjs'

// Basic operators
// @ts-ignore
import addOperator from './operators/addOperator.mjs'
// @ts-ignore
import subtractOperator from './operators/subtractOperator.mjs'
// @ts-ignore
import multiplyOperator from './operators/multiplyOperator.mjs'
// @ts-ignore
import divideOperator from './operators/divideOperator.mjs'

// Extend operators
// @ts-ignore
import modOperator from './operators/modOperator.mjs'
// @ts-ignore
import powerOperator from './operators/powerOperator.mjs'

// Logical operators
// @ts-ignore
import notOperator from './operators/notOperator.mjs'
// @ts-ignore
import toBooleanOperator from './operators/toBooleanOperator.mjs'
// @ts-ignore
import andOperator from './operators/andOperator.mjs'
// @ts-ignore
import orOperator from './operators/orOperator.mjs'

// Comparison operators
// @ts-ignore
import equalOperator from './operators/equalOperator.mjs'
// @ts-ignore
import notEqualOperator from './operators/notEqualOperator.mjs'
// @ts-ignore
import greaterOperator from './operators/greaterOperator.mjs'
// @ts-ignore
import lessOperator from './operators/lessOperator.mjs'
// @ts-ignore
import greaterEqualOperator from './operators/greaterEqualOperator.mjs'
// @ts-ignore
import lessEqualOperator from './operators/lessEqualOperator.mjs'

// Utility operator
// @ts-ignore
import rangeOperator from './operators/rangeOperator.mjs'
// @ts-ignore
import toJSONOperator from './operators/toJSONOperator.mjs'
// @ts-ignore
import toNumberOperator from './operators/toNumberOperator.mjs'

// Array operators
// @ts-ignore
import toArrayOperator from './operators/toArrayOperator.mjs'
// @ts-ignore
import sortOperator from './operators/sortOperator.mjs'
// @ts-ignore
import reverseOperator from './operators/reverseOperator.mjs'
// @ts-ignore
import summaryOperator from './operators/summaryOperator.mjs'
// @ts-ignore
import averageOperator from './operators/averageOperator.mjs'

// Console operators
// @ts-ignore
import printOperator from './operators/printOperator.mjs'

/**
 * Slawn カスタムエンジン
 * @extends Engine
 */
class Slawn extends Engine {
  /**
   * オペレータを定義します
   */
  constructor () {
    super({
      '+': addOperator,
      '-': subtractOperator,
      '*': multiplyOperator,
      '/': divideOperator,
      '%': modOperator,
      '**': powerOperator,
      '!': notOperator,
      '!!': toBooleanOperator,
      '&&': andOperator,
      '||': orOperator,
      '==': equalOperator,
      '!=': notEqualOperator,
      '>': greaterOperator,
      '<': lessOperator,
      '>=': greaterEqualOperator,
      '<=': lessEqualOperator,
      '!range': rangeOperator,
      '!toJSON': toJSONOperator,
      '!toNumber': toNumberOperator,
      '!toArray': toArrayOperator,
      '!sort': sortOperator,
      '!reverse': reverseOperator,
      '!summary': summaryOperator,
      '!average': averageOperator,
      '!print': printOperator
    })
  }
}

export default Slawn
