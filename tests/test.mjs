import Slawn from '../src/slawn.mjs'
import chalk from 'chalk'
import shell from 'shelljs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

shell.ls(`${__dirname}/*.test.mjs`).forEach(file => {
  import(file)
  .then(data => {
    const slawn = new Slawn()
    slawn.eval([
      ...data.default.target, '!toArray', '!toJSON', data.default.toBe, '!toArray', '!toJSON', '==', [
        chalk`{green.bold PASSED} ${file}`, '!print'
      ], [
        chalk`{red.bold FAILED} ${file}`, '!print',
        'stack', '$', '!print'
      ], '!if'
    ])
  })
  .catch(error => {
    console.error(error)
  })
})
