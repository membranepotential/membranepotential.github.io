//psuedo-random number generator (linear congruential)

const M = 4294967296
const A = 1664525
const C = 1

let state = Math.floor(Math.random() * M)

export default () => {
  state = (A * state + C) % M
  return state / M - 0.5
}
