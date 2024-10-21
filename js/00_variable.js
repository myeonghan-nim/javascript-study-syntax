// var: define, rewirte infinite / function-scope
// let: define once, rewirte infinite / block-scope
// const: define, rewirte once / block-scope

let x = 1

x = 3
console.log(x)

// function
function varTest() {
  var x = 1
  if (true) {
    var x = 2
    console.log(x)
  }
  console.log(x)
}

varTest()
console.log(x)

// scope
if (x === 1) {
  let x = 2
  console.log(x)
}
console.log(x)

const y = 9
if (y === 9) {
  const y = 10
  console.log(y)
}
console.log(y)

// naming convention
let dog
let variableName
let dogs = []
let boolVariable = false

const API_KEY = ''

function getName() {}
const onClick = () => {}

class User {
  constructor (value) {
    this.name = value.name
  }
}

// number
const a = 12
const b = -5
const c = 3.14
const d = 2.9e8
const e = Infinity
const f = -Infinity
const g = NaN

console.log(a, b, c, d, typeof e, f, typeof g)
console.log(Math.sqrt(-2))

// string
const sentence1 = 'a\n'
const sentence2 = 'b\n'
const sentence3 = `c${sentence2}`

console.log(sentence1 + sentence2, sentence3)

// boolean
const isValid = true

// type check
let firstName
console.log(typeof firstName)

let lastName = null
console.log(typeof lastName)

console.log(null == undefined)
console.log(null === undefined)

console.log(null + 1)
console.log(undefined + 1)
