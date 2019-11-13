// characteristics of let
let x = 1
let x = 2  // let cannot define same variable

x = 3

console.log(x)


// block-scope
let x = 1

if (x === 1) {
  let x = 2
  console.log(x)  // let, const can alive in block-scope
}
console.log(x)


// diff of data types
const y = 9  // const define variable and value
let x  // let can define variable only

if (y === 9) {
  const y = 10
  console.log(y)
}
console.log(y)


// var(before ES6)
function varTest() {
  var x = 1

  if (true) {
    var x = 2
    console.log(x)
  }
  console.log(x)  // var is function-scope
}

varTest()
console.log(x)

// var : define, rewirte inf / function-scope (before ES6)
// let : define once, rewirte inf / block-scope
// const : define, rewirte once / block-scope


// define variables
let dog
let variableName  // carmelcase

let dogs = []  // array(Object type)

function getName() {}  // define function
const onClick = () => {}  // define event(start with on or off)

let isValid = false  // define boolean(start with is)

class User {
  constructor (value) {
    this.name = value.name
  }  // define constructor
}  // define class(pascalcase)

const API_KEY = ''  // all capital variable means unmutuble ever

// number
const a = 12
const b = -5
const c = 3.14
const d = 2.9e8
const e = Infinity  // number
const f = -Infinity
const g = NaN  // complex number prints NaN

console.log(a, b, c, d, typeof e, f, typeof g)  // typeof returns type of variable
console.log(Math.sqrt(-2))

// string
const sentence1 = 'hi\n'
const sentence2 = "hihi\n"
const sentence3 = `hi${sentence2}`

console.log(sentence1 + sentence2, sentence3)

// boolean
const isValid = true

// non-value
let first_name

console.log(typeof first_name)  // undefined(auto), undefined

let last_name = null

console.log(typeof last_name)  // null, object

console.log(null == undefined)
console.log(null === undefined)

console.log(null + 1)  // null can calculate
console.log(undefined + 1)