// types of define function
// define function
function add(num1, num2) {
  return num1 + num2
}

console.log(add(2, 10))

// express function
const sub = function (num1, num2) {
  return num1 - num2
}

console.log(sub(10, 2))

// arrow function
const SSAFY1 = function (name) {
  console.log(`hi, ${name}`)
}

SSAFY1('hi')

const SSAFY2 = (name) => {
  console.log(`hi, ${name}`)
}

SSAFY2('change')


// easy functions
// without (), when variable is only one
const SSAFY3 = name => {
  console.log(`hi, ${name}`)
}

SSAFY3('Seoul')

// without {}, when return is only one
const SSAFY4 = name => `hi, ${name}`

console.log(SSAFY4('GJ'))

// final easy function
let square = num => num ** 2

console.log(square(4))

let noArgs = _ => 'no args'  // _ is same as ()

console.log(noArgs())


// object in js
const a = {}

let returnObject = () => ({key: 'value'})  // return object in function

console.log(typeof a)


// default value in functions
const hello = (name='Anomy') => `hello, ${name}`

console.log(hello())


// anomy function in js
(function (name) {
  console.log(name)
})('change')