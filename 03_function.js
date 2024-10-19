function add(num1, num2) {
  return num1 + num2
}
console.log(add(2, 10))

const sub = function (num1, num2) {
  return num1 - num2
}
console.log(sub(10, 2))

const arrow = (c) => {
  console.log(`You entered ${c}.`)
}
arrow('change')

let square = num => num ** 2
console.log(square(4))

let returnObject = () => ({ key: 'value' })
console.log(returnObject())

let noArgs = _ => 'No args.'
console.log(noArgs())

(function (c) {console.log(c)})('The most simple function ever.')

const use = (item='default') => `${item} exist.`
console.log(use())
