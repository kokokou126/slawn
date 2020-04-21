import Slawn from './slawn.mjs'
import readline from 'readline'

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const slawn = new Slawn()

const asyncPrompt = () => {
  prompt.question('slawn> ', expression => {
    if (expression === 'exit') {
      prompt.close()
    } else {
      try {
        slawn.eval(JSON.parse(expression))
      } catch (e) {
        console.error(e)
      }
      asyncPrompt()
    }
  })
}

asyncPrompt()
