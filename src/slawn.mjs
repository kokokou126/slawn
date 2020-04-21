import Engine from './engine.mjs'

// Basic operators
import addOperator from './operators/addOperator.mjs'
import subtractOperator from './operators/subtractOperator.mjs'
import multiplyOperator from './operators/multiplyOperator.mjs'
import divideOperator from './operators/divideOperator.mjs'

// Extend operators
import modOperator from './operators/modOperator.mjs'
import powerOperator from './operators/powerOperator.mjs'

// Logical operators
import notOperator from './operators/notOperator.mjs'
import toBooleanOperator from './operators/toBooleanOperator.mjs'
import andOperator from './operators/andOperator.mjs'
import orOperator from './operators/orOperator.mjs'

// Comparison operators
import equalOperator from './operators/equalOperator.mjs'
import notEqualOperator from './operators/notEqualOperator.mjs'
import greaterOperator from './operators/greaterOperator.mjs'
import lessOperator from './operators/lessOperator.mjs'
import greaterEqualOperator from './operators/greaterEqualOperator.mjs'
import lessEqualOperator from './operators/lessEqualOperator.mjs'

// Utility operator
import rangeOperator from './operators/rangeOperator.mjs'
import toJSONOperator from './operators/toJSONOperator.mjs'
import toNumberOperator from './operators/toNumberOperator.mjs'

// Array operators
import toArrayOperator from './operators/toArrayOperator.mjs'
import sortOperator from './operators/sortOperator.mjs'
import reverseOperator from './operators/reverseOperator.mjs'
import summaryOperator from './operators/summaryOperator.mjs'
import averageOperator from './operators/averageOperator.mjs'

// Console operators
import printOperator from './operators/printOperator.mjs'

export default class extends Engine {
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
