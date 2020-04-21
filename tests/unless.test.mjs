export default {
  target: [
    'result', '[]', '=',
    '$true', [
      'result', 'true case', '!push'
    ], [
      'result', 'false case', '!push'
    ], '!unless',
    'result', '$'
  ],
  toBe: ['false case']
}
