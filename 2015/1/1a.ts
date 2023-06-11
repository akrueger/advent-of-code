import { input } from './input1'

const bracketsPrime = input.split('')

const solution = bracketsPrime.reduce((synthesis, element) => {
  return element === '(' ? synthesis + 1 : synthesis - 1
}, 0)
