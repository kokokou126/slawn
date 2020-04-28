import chalk from 'chalk'
import shell from 'shelljs'
import UglifyES from 'uglify-es'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

shell.cd(`${__dirname}/..`)

shell
  .find('src')
  .filter(d => shell.test('-d', d) && !d.match(/^src$/))
  .map(d => d.replace(/^src\//, ''))
  .forEach(d => {
    shell.mkdir('-p', `dist/${d}`)
  })

shell
  .find('src')
  .filter(f => shell.test('-f', f))
  .map(f => f
    .replace(/^src\//, '')
    .replace(/.mjs$/, '')
  )
  .forEach(f => {
    const result = UglifyES.minify(
      shell.cat(`src/${f}.mjs`).toString()
    )
    if (!result.error) {
      const outFileName = `${f}.min.js`
      shell.ShellString(`/**
@file ${outFileName}
@license\n`)
        .to(`dist/${outFileName}`)
        && shell.cat('LICENSE')
          .toEnd(`dist/${outFileName}`)
        && shell.sed('-i', /^(?!\/\*\*$)/g, ' * ', `dist/${outFileName}`)
        && shell.ShellString(' */\n')
          .toEnd(`dist/${outFileName}`)
        && shell.sed('-i', /\s*$/g, '', `dist/${outFileName}`)
        && shell.echo(chalk`{yellow.bold INITIALIZED} dist/${outFileName}`)
      shell.ShellString(result.code)
        .toEnd(`dist/${outFileName}`)
        && shell.echo(chalk`{cyan.bold MINIFIED} src/${f}.mjs -> dist/${outFileName}`)
      shell.sed('-i', /\.mjs"/g, '.js"', `dist/${outFileName}`)
        && shell.echo(chalk`{blue.bold PROCESSED} dist/${outFileName}`)
    } else {
      shell.echo(chalk`{red.bold ERROR} dist/${f}.mjs
      ${result.error}`)
      shell.exit(1)
    }
  })
