import { source } from './source1'

const bracketsPrime = source.split('')

const solution = bracketsPrime.reduce((synthesis, element) => {
  return element === '(' ? synthesis + 1 : synthesis - 1
}, 0)
