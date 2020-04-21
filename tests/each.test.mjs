export default {
  target: [
    'result', '[]', '=',
    'name', ['Alice', 'Bob', 'Carol'], [
      'result', 'hello, ', 'name', '$', '+', '!push'
    ], '!each',
    'result', '$'
  ],
  toBe: [
    'hello, Alice', 'hello, Bob', 'hello, Carol'
  ]
}
