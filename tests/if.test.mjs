export default {
  target: [
    'result', '[]', '=',
    '$true', [
      'result', 'true case', '!push'
    ], [
      'result', 'false case', '!push'
    ], '!if',
    'result', '$'
  ],
  toBe: ['true case']
}
