export default {
  target: [
    '$null', '!!',
    '$undefined', '!!', '==',
    '$NaN', '!!', '==',
    '$Infinity', '!!', '==',
    '[]', '!!', '==',
    '{}', '!!', '=='
  ],
  toBe: true
}
