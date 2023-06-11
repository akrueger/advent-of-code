import { source } from './input1'

const bracketsPrime = source.split('')

let floor = 0
let index

for (let i = 0; i < bracketsPrime.length - 1; i++) {
  if (bracketsPrime[i] === '(') {
    floor += 1
  } else {
    floor -= 1
  }
  index = i + 1
  if (floor < 0) {
    break
  }
}

const solution = index
