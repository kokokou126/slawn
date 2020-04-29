import chalk from 'chalk'
import shell from 'shelljs'
import UglifyES from 'uglify-es'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

shell.cd(`${__dirname}/..`)

const ignores = shell.cat('scripts/.minifyignore').toString().split('\n')

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
    if (ignores.includes(`${f}.mjs`)) {
      return
    }
    const result = UglifyES.minify(
      shell.cat(`src/${f}.mjs`).toString()
    )
    const outFileName = `${f}.js`
    shell.cp('-f', `src/${f}.mjs`, `dist/${outFileName}`)
      && shell.echo(chalk`{green.bold COPIED} src/${f}.mjs -> dist/${outFileName}`)
    shell.sed('-i', /\.mjs'/g, ".js'", `dist/${outFileName}`)
      && shell.echo(chalk`{blue.bold PROCESSED} dist/${outFileName}`)
    if (!result.error) {
      const outMinifiedFileName = `${f}.min.js`
      shell.ShellString(`/**
@file ${outMinifiedFileName}
@license\n`)
        .to(`dist/${outMinifiedFileName}`)
        && shell.cat('LICENSE')
          .toEnd(`dist/${outMinifiedFileName}`)
        && shell.sed('-i', /^(?!\/\*\*$)/g, ' * ', `dist/${outMinifiedFileName}`)
        && shell.ShellString(' */\n')
          .toEnd(`dist/${outMinifiedFileName}`)
        && shell.sed('-i', /\s*$/g, '', `dist/${outMinifiedFileName}`)
        && shell.echo(chalk`{yellow.bold INITIALIZED} dist/${outMinifiedFileName}`)
      shell.ShellString(result.code)
        .toEnd(`dist/${outMinifiedFileName}`)
        && shell.echo(chalk`{cyan.bold MINIFIED} src/${f}.mjs -> dist/${outMinifiedFileName}`)
      shell.sed('-i', /\.mjs"/g, '.min.js"', `dist/${outMinifiedFileName}`)
        && shell.echo(chalk`{blue.bold PROCESSED} dist/${outMinifiedFileName}`)
    } else {
      shell.echo(chalk`{red.bold ERROR} dist/${f}.mjs
      ${result.error}`)
      shell.exit(1)
    }
  })
