import Slawn from '../src/slawn.mjs'

const slawn = new Slawn()
slawn.eval([
  'i', 0, '=',
  ['i', '$', 10, '<='], [
    'i', '$', '!print',
    'i', 1, '+='
  ], '!while'
])
