export default {
  target: [
    'name', 'Drake', '=',
    'hello, ', 'name', '$', '+'
  ],
  toBe: 'hello, Drake'
}
