export default {
  target: [
    'result', '[]', '=',
    3, [
      'result', 'hello', '!push'
    ], '!times',
    'result', '$'
  ],
  toBe: ['hello', 'hello', 'hello']
}
