// characteristics of let
let x = 1
let x = 2  // let cannot define same variable

x = 3

console.log(x)


// block-scope
let x = 1

if (x === 1) {
  let x = 2
  console.log(x)  // variables can alive in block-scope
}
console.log(x)


// diff of variable types
let x  // let only define variable
const y = 9  // const define variable and value

if (y === 9) {
  const y = 10
  console.log(y)
}
console.log(y)


// variable type var(~ES5)
function varTest() {
  var x = 1

  if (true) {
    var x = 2
    console.log(x)
  }
  console.log(x)  // var has function-scope
}

varTest()
console.log(x)

// var : define, mutuble free / function-scope (~ES5)
// let : define once, mutuble free / block-scope
// const : define once, unmutuble / block-scope


// define variables
// types of variables
let dog
let variableName  // carmelcase

let dogs = []  // define array

function getName() {
  // define function
}

const onClick = () => {}  // define event(start with on/off)

let isValid = false  // define boolean(start with is)

class User {
  // define class(pascalcase)
  constructor (value) {
    // define constructor
    this.name = value.name
  }
}

const API_KEY = ''  // unmutuble never

// number type
const a = 12
const b = -5
const c = 3.14
const d = 2.9e8
const e = Infinity  // number type
const f = -Infinity
const g = NaN  // complex number prints NaN

console.log(a, b, c, d,typeof e, f,typeof g)  // typeof returns type of variable
console.log(Math.sqrt(-2))

// string type
const sentence1 = 'hi\n'
const sentence2 = "hihi\n"
const sentence3 = `hi${sentence2}`

console.log(sentence1 + sentence2, sentence3)

// boolean type
const isValid = true

// non-value type
let first_name

console.log(typeof first_name)  // undefined(auto), undefined type

let last_name = null

console.log(typeof last_name)  // null, object type

console.log(null == undefined)
console.log(null === undefined)

console.log(null + 1)  // null can calculate
console.log(undefined + 1)