import { input } from './input2'

const solution = input
  .split('\n')
  .map((value) => value.split('x'))
  .map((value) => value.map((value) => parseInt(value, 10)))
  .map((value) => {
    const a = value[0] * value[1]
    const b = value[1] * value[2]
    const c = value[0] * value[2]
    const slack = [a, b, c].reduce((synthesis, element) =>
      synthesis < element ? synthesis : element
    )
    return (a + b + c) * 2 + slack
  })
  .reduce((synthesis, element) => synthesis + element)

// use transducer
