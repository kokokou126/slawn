export default {
  target: [
    'result', '[]', '=',
    'i', 10, 15, '!range', [
      'i', '$', 15, '%', 0, '==', [
        'result', 'FizzBuzz', '!push'
      ], ['i', '$', 3, '%', 0, '==', [
        'result', 'Fizz', '!push'
      ], ['i', '$', 5, '%', 0, '==', [
        'result', 'Buzz', '!push'
      ], [
        'result', 'i', '$', '!push'
      ], '!if'], '!if'], '!if'
    ], '!each',
    'result', '$'
  ],
  toBe: ['Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
}
