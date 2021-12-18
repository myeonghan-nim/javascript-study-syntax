// define
function add(num1, num2) {
  return num1 + num2
}
console.log(add(2, 10))

const sub = function (num1, num2) {
  return num1 - num2
}
console.log(sub(10, 2))

const greet = (name) => {
  console.log(`Hi, ${name}!`)
}
greet('change')

const send = name => {
  console.log(`Bye, ${name}!`)
}
send('Seoul')

const call = name => `${name}`
console.log(call('Busan'))

let square = num => num ** 2
console.log(square(4))

let noArgs = _ => 'No args.'
console.log(noArgs())

(function (name) {console.log(name)})('unknown')

// object
const a = {}
console.log(typeof a)

let returnObject = () => ({key: 'value'})

// default value
const use = (item='none') => `${item} exist.`
console.log(use())
