export default {
  target: [
    'result', '[]', '=',
    'n', 0, '=',
    ['n', '$', 10, '>'], [
      'result', 'n', '$', '!push',
      'n', 1, '+='
    ], '!until',
    'result', '$'
  ],
  toBe: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
