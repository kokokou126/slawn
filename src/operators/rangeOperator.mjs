export default {
  arg: 2,
  body: (p1, p2) => [...Array(p1 - p2 + 1).keys()].map(v => v + p2)
}
