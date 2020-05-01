import inquirer from 'inquirer'
import shell from 'shelljs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

shell.cd(`${__dirname}/..`)

inquirer.prompt([
  {
    name: 'name',
    message: 'Operator name?'
  },
  {
    name: 'alias',
    message: 'Operator alias?'
  },
  {
    name: 'groups',
    message: 'Operator groups?'
  },
  {
    name: 'description',
    message: 'Operator description?'
  },
  {
    name: 'arg',
    message: 'Number of arguments?'
  },
  {
    name: 'depends',
    message: 'Operator depends?'
  }
]).then(answers => {
  shell.echo(`-
  name: ${answers.name}
  alias: ${answers.alias}
  groups: ${answers.groups}
  description: ${answers.description}
  arg: ${answers.arg}
  depends: ${answers.depends}`).toEnd('src/operators.yml')
})
