// Constants
import nullOperator from './operators/nullOperator.mjs'
import undefinedOperator from './operators/undefinedOperator.mjs'
import NaNOperator from './operators/NaNOperator.mjs'
import InfinityOperator from './operators/InfinityOperator.mjs'
import ArrayOperator from './operators/ArrayOperator.mjs'
import ObjectOperator from './operators/ObjectOperator.mjs'

// Boolean
import trueOperator from './operators/trueOperator.mjs'
import falseOperator from './operators/falseOperator.mjs'

export default class {
  constructor (operators) {
    const self = this
    this.namespace = new Map()
    const setOperator = {
      arg: 2,
      body: (p1, p2) => {
        self.namespace.set(p2, p1)
        return null
      }
    }
    const getOperator = {
      arg: 1,
      body: p1 => self.namespace.get(p1)
    }
    const deleteOperator = {
      arg: 1,
      body: p1 => {
        self.namespace.delete(p1)
        return null
      }
    }
    const addAssignOperator = {
      arg: 2,
      body: (p1, p2) => {
        self.namespace.set(p2, self.namespace.get(p2) + p1)
        return null
      }
    }
    const subtractAssignOperator = {
      arg: 2,
      body: (p1, p2) => {
        self.namespace.set(p2, self.namespace.get(p2) - p1)
        return null
      }
    }
    const multiplyAssignOperator = {
      arg: 2,
      body: (p1, p2) => {
        self.namespace.set(p2, self.namespace.get(p2) * p1)
        return null
      }
    }
    const divideAssignOperator = {
      arg: 2,
      body: (p1, p2) => {
        self.namespace.set(p2, self.namespace.get(p2) / p1)
        return null
      }
    }
    const modAssignOperator = {
      arg: 2,
      body: (p1, p2) => {
        self.namespace.set(p2, self.namespace.get(p2) % p1)
        return null
      }
    }
    const powerAssignOperator = {
      arg: 2,
      body: (p1, p2) => {
        self.namespace.set(p2, self.namespace.get(p2) ** p1)
        return null
      }
    }
    const evalOperator = {
      arg: 1,
      body: p1 => {
        this.eval(p1)
        return null
      }
    }
    const ifOperator = {
      arg: 3,
      body: (p1, p2, p3) => {
        if (p3) {
          this.eval(p2)
        } else {
          this.eval(p1)
        }
        return null
      }
    }
    const unlessOperator = {
      arg: 3,
      body: (p1, p2, p3) => {
        if (!p3) {
          this.eval(p2)
        } else {
          this.eval(p1)
        }
        return null
      }
    }
    const eachOperator = {
      arg: 3,
      body: (p1, p2, p3) => {
        for (let i = 0; i < p2.length; i++) {
          self.namespace.set(p3, p2[i])
          this.eval(p1)
        }
        self.namespace.delete(p3)
        return null
      }
    }
    const whileOperator = {
      arg: 2,
      body: (p1, p2) => {
        while (1) {
          this.eval(p2)
          if (!this.stack[this.stack.length - 1]) {
            this.stack.pop()
            break
          }
          this.eval(p1)
        }
        return null
      }
    }
    const untilOperator = {
      arg: 2,
      body: (p1, p2) => {
        while (1) {
          this.eval(p2)
          if (this.stack[this.stack.length - 1]) {
            this.stack.pop()
            break
          }
          this.eval(p1)
        }
        return null
      }
    }
    const timesOperator = {
      arg: 2,
      body: (p1, p2) => {
        Array(p2).fill(0).forEach(() => {
          this.eval(p1)
        })
        return null
      }
    }
    const pushOperator = {
      arg: 2,
      body: (p1, p2) => {
        self.namespace.set(p2, [...self.namespace.get(p2), p1])
        return null
      }
    }
    this.operators = {
      $true: trueOperator,
      $false: falseOperator,
      $null: nullOperator,
      $undefined: undefinedOperator,
      $NaN: NaNOperator,
      $Infinity: InfinityOperator,
      '[]': ArrayOperator,
      '{}': ObjectOperator,
      '=': setOperator,
      '+=': addAssignOperator,
      '-=': subtractAssignOperator,
      '*=': multiplyAssignOperator,
      '/=': divideAssignOperator,
      '%=': modAssignOperator,
      '**=': powerAssignOperator,
      $: getOperator,
      '!delete': deleteOperator,
      '!eval': evalOperator,
      '!if': ifOperator,
      '!unless': unlessOperator,
      '!each': eachOperator,
      '!while': whileOperator,
      '!until': untilOperator,
      '!times': timesOperator,
      '!push': pushOperator,
      ...operators
    }
    this.stack = []
    this.namespace.set('stack', this.stack)
  }

  eval (expression) {
    expression.forEach(v => {
      if (v === '$null') {
        this.stack.push(null)
      } else if (this.operators[v]) {
        const args = []
        Array(this.operators[v].arg).fill(0).forEach(x => {
          args.push(this.stack.pop())
        })
        const result = this.operators[v].body(...args)
        if (result === null) {
          return
        } else {
          this.stack.push(result)
        }
      } else {
        this.stack.push(v)
      }

      return this.stack
    })
  }
}
