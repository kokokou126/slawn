import chalk from 'chalk'
import shell from 'shelljs'
import yaml from 'js-yaml'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

shell.cd(`${__dirname}/..`)

try {
  shell
    .find('src')
    .filter(f => shell.test('-f', f) && f.match(/.yml$/))
    .map(f => f
      .replace(/^src\//, '')
      .replace(/.yml$/, '')
    )
    .forEach(f => {
      const targetPath = `src/${f}.yml`
      const outFilePath = `dist/${f}.json`
      const target = yaml.safeLoad(shell.cat(targetPath))
      shell.ShellString(JSON.stringify(target))
        .to(outFilePath)
        && shell.echo(chalk`{green.bold SUCCESS} ${targetPath} -> ${outFilePath}`)
    })
} catch (e) {
  shell.echo(e)
}
