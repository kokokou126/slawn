/**
 * @file Slawn の評価エンジンです
 * @author kokokou126 <kokokou126@gmail.com>
 */

// @ts-check

/**
 * Slawn オペレータ
 * @typedef {Object} Operator
 * @property {number} arg 引数の数
 * @property {Function} body オペレータの処理部分
 */

/**
 * Slawn 式
 * @typedef {Array<string|number>} Expression
 */

// Constants
// @ts-ignore
import nullOperator from './operators/nullOperator.mjs'
// @ts-ignore
import undefinedOperator from './operators/undefinedOperator.mjs'
// @ts-ignore
import NaNOperator from './operators/NaNOperator.mjs'
// @ts-ignore
import InfinityOperator from './operators/InfinityOperator.mjs'
// @ts-ignore
import ArrayOperator from './operators/ArrayOperator.mjs'
// @ts-ignore
import ObjectOperator from './operators/ObjectOperator.mjs'

// Boolean
// @ts-ignore
import trueOperator from './operators/trueOperator.mjs'
// @ts-ignore
import falseOperator from './operators/falseOperator.mjs'

/**
 * Slawn エンジン
 */
class Engine {
  /**
   * オペレータを定義します
   * @param {Object} operators
   */
  constructor (operators) {
    /**
     * self is this
     * @type {Object}
     */
    const self = this

    /**
     * 変数のための名前空間
     * @type {Map}
     */
    this.namespace = new Map()

    /**
     * 代入オペレータ
     * @operator
     * @type {Operator}
     */
    const setOperator = {
      arg: 2,
      /**
       * 名前空間にキーを指定して値を代入します
       * @param {any} p1 - 代入する値
       * @param {string} p2 - キー名
       * @returns {null}
       */
      body: (p1, p2) => {
        self.namespace.set(p2, p1)
        return null
      }
    }

    /**
     * 展開オペレータ
     * @operator
     * @type {Operator}
     */
    const getOperator = {
      arg: 1,
      /**
       * 名前空間から指定したキーの値を返します
       * @param {string} p1 - キー名
       * @returns {any}
       */
      body: p1 => self.namespace.get(p1)
    }

    /**
     * 削除オペレータ
     * @operator
     * @type {Operator}
     */
    const deleteOperator = {
      arg: 1,
      /**
       * 名前空間からキーと値のペアを削除します
       * @param {string} p1 - キー名
       * @returns {null}
       */
      body: p1 => {
        self.namespace.delete(p1)
        return null
      }
    }

    /**
     * 加算代入オペレータ
     * @operator
     * @type {Operator}
     */
    const addAssignOperator = {
      arg: 2,
      /**
       * 名前空間から指定したキーの値に値を加え、
       * その結果を代入します
       * @param {any} p1 - 加える値
       * @param {string} p2 - キー名
       * @returns {null}
       */
      body: (p1, p2) => {
        self.namespace.set(p2, self.namespace.get(p2) + p1)
        return null
      }
    }

    /**
     * 減算代入オペレータ
     * @operator
     * @type {Operator}
     */
    const subtractAssignOperator = {
      arg: 2,
      /**
       * 名前空間から指定したキーの値の数値を減らし、
       * その結果を代入します
       * @param {number} p1 - 減らす値
       * @param {string} p2 - キー名
       * @returns {null}
       */
      body: (p1, p2) => {
        self.namespace.set(p2, self.namespace.get(p2) - p1)
        return null
      }
    }

    /**
     * 乗算代入オペレータ
     * @operator
     * @type {Operator}
     */
    const multiplyAssignOperator = {
      arg: 2,
      /**
       * 名前空間から指定したキーの値の数値で乗算を行い、
       * その結果を代入します
       * @param {number} p1 - 掛ける値
       * @param {string} p2 - キー名
       * @returns {null}
       */
      body: (p1, p2) => {
        self.namespace.set(p2, self.namespace.get(p2) * p1)
        return null
      }
    }

    /**
     * 除算代入オペレータ
     * @operator
     * @type {Operator}
     */
    const divideAssignOperator = {
      arg: 2,
      /**
       * 名前空間から指定したキーの値の数値で除算を行い、
       * その結果を代入します
       * @param {number} p1 - 割る値
       * @param {string} p2 - キー名
       * @returns {null}
       */
      body: (p1, p2) => {
        self.namespace.set(p2, self.namespace.get(p2) / p1)
        return null
      }
    }

    /**
     * 剰余代入オペレータ
     * @operator
     * @type {Operator}
     */
    const modAssignOperator = {
      arg: 2,
      /**
       * 名前空間から指定したキーの値の数値で除算を行い、
       * 剰余を代入します
       * @param {number} p1 - 割る値
       * @param {string} p2 - キー名
       * @returns {null}
       */
      body: (p1, p2) => {
        self.namespace.set(p2, self.namespace.get(p2) % p1)
        return null
      }
    }

    /**
     * べき乗代入オペレータ
     * @operator
     * @type {Operator}
     */
    const powerAssignOperator = {
      arg: 2,
      /**
       * 名前空間から指定したキーの値の数値でべき乗を行い、
       * その結果を代入します
       * @param {number} p1 - 掛ける値
       * @param {string} p2 - キー名
       * @returns {null}
       */
      body: (p1, p2) => {
        self.namespace.set(p2, self.namespace.get(p2) ** p1)
        return null
      }
    }

    /**
     * 評価オペレータ
     * @operator
     * @type {Operator}
     */
    const evalOperator = {
      arg: 1,
      /**
       * 渡された Slawn 式を評価します
       * @param {Expression} p1 - Slawn 式
       * @returns {null}
       */
      body: p1 => {
        this.eval(p1)
        return null
      }
    }

    /**
     * if オペレータ
     * @operator
     * @type {Operator}
     */
    const ifOperator = {
      arg: 3,
      /**
       * 条件式が true の場合、then 節を評価します。
       * さもなくば、else 節を評価します。
       * @param {Expression} p1 - else 節
       * @param {Expression} p2 - then 節
       * @param {boolean} p3 - 条件式
       * @returns {null}
       */
      body: (p1, p2, p3) => {
        if (p3) {
          this.eval(p2)
        } else {
          this.eval(p1)
        }
        return null
      }
    }

    /**
     * unless オペレータ
     * @operator
     * @type {Operator}
     */
    const unlessOperator = {
      arg: 3,
      /**
       * 条件式が false の場合、then 節を評価します。
       * さもなくば、else 節を評価します。
       * @param {Expression} p1 - else 節
       * @param {Expression} p2 - then 節
       * @param {boolean} p3 - 条件式
       * @returns {null}
       */
      body: (p1, p2, p3) => {
        if (!p3) {
          this.eval(p2)
        } else {
          this.eval(p1)
        }
        return null
      }
    }

    /**
     * each オペレータ
     * @operator
     * @type {Operator}
     */
    const eachOperator = {
      arg: 3,
      /**
       * 配列に対して反復処理を行います。
       * 指定した変数に配列の値を代入します。
       * @param {Expression} p1 - Slawn 式
       * @param {Array} p2 - 繰り返す配列
       * @param {string} p3 - 変数名
       * @return {null}
       */
      body: (p1, p2, p3) => {
        for (let i = 0; i < p2.length; i++) {
          self.namespace.set(p3, p2[i])
          this.eval(p1)
        }
        self.namespace.delete(p3)
        return null
      }
    }

    /**
     * while オペレータ
     * @operator
     * @type {Operator}
     */
    const whileOperator = {
      arg: 2,
      /**
       * 条件式が true の間、Slawn 式を評価し続けます
       * @param {Expression} p1 - 評価し続ける Slawn 式
       * @param {Expression} p2 - 条件式
       */
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

    /**
     * until オペレータ
     * @operator
     * @type {Operator}
     */
    const untilOperator = {
      arg: 2,
      /**
       * 条件式が false の間、Slawn 式を評価し続けます
       * @param {Expression} p1 - 評価し続ける Slawn 式
       * @param {Expression} p2 - 条件式
       */
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

    /**
     * times オペレータ
     * @operator
     * @type {Operator}
     */
    const timesOperator = {
      arg: 2,
      /**
       * 指定した回数、Slawn 式を評価します
       * @param {Expression} p1 - Slawn 式
       * @param {number} p2 - 繰り返す回数
       */
      body: (p1, p2) => {
        Array(p2).fill(0).forEach(() => {
          this.eval(p1)
        })
        return null
      }
    }

    /**
     * push オペレータ
     * @operator
     * @type {Operator}
     */
    const pushOperator = {
      arg: 2,
      /**
       * 配列を指定し、指定した値を末尾に追加します
       * @param {any} p1 - 追加する値
       * @param {string} p2 - 配列名
       */
      body: (p1, p2) => {
        self.namespace.set(p2, [...self.namespace.get(p2), p1])
        return null
      }
    }

    /**
     * オペレータを定義
     * @type {Object}
     */
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

    /**
     * Slawn エンジンのスタック
     * @type {Array}
     */
    this.stack = []

    // 名前空間からスタックを参照できるようにする
    this.namespace.set('stack', this.stack)
  }

  /**
   * 名前空間にキーを指定して値を代入します
   * @param {string} key
   * @param {any} value
   * @returns {void}
   */
  setVariable (key, value) {
    this.namespace.set(key, value)
  }

  /**
   * 名前空間から指定したキーから値を取得し返します
   * @param {string} key
   * @return {any}
   */
  getVariable (key) {
    return this.namespace.get(key)
  }

  /**
   * Slawn 式を評価します
   * @param {Expression} expression - Slawn 式
   * @returns {Object} - スタックを返します
   */
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

export default Engine
