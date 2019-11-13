// functions
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
const SSAFY = (name) => {
  console.log(`hi, ${name}`)
}

SSAFY('change')


// easy function
const SSAFY2 = name => {
  console.log(`hi, ${name}`)
}  // when variable is one, delete ()

SSAFY2('Seoul')

const SSAFY3 = name => `hi, ${name}`  // when return is one, delete {}

console.log(SSAFY3('GJ'))


// ultimate easy function
let square = num => num ** 2

console.log(square(4))

let noArgs = _ => 'no args'  // _ is ()

console.log(noArgs())


// object
const a = {}

let returnObject = () => ({key: 'value'})  // return object

console.log(typeof a)


// default value in functions
const hello = (name='Anomy') => `hello, ${name}`

console.log(hello())


// anomy function in js
(function (name) {console.log(name)})('change')