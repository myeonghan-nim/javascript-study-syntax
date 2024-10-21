// javascript syntax

// single-line annotation
/*
multi
line
annotation
*/

// variable
// var: define, rewirte infinite / function-scope
// let: define once, rewirte infinite / block-scope
// const: define, rewirte once / block-scope
var variable

let value
let values = []
let variableName
let boolVariable = false

const API_KEY = ''

function functionName() {}
const simpleFunction = () => {}

class Class {
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

// operator
let o

o = o + 3
console.log(o)

o += 3
console.log(o)

o++
console.log(o)

console.log(null + 1)
console.log(undefined + 1)

// comparison
console.log(3 < 2)
console.log('a' < 'b')
console.log('a' < 'A')

console.log(1 == '1')
console.log(1 === '1')
console.log(1 === Number('1'))

console.log(true && false)
console.log(true || false)
console.log(!true)

console.log(null == undefined)
console.log(null === undefined)

// string
const sentence1 = 'a'
const sentence2 = 'b'
const sentence3 = `NaN is ${g}`

console.log(sentence1 + sentence2, sentence3)

// boolean
const isValid = true

// if-else
let randomNumber = Math.random()

let message = ''
if (randomNumber > 0.8) {
  message = 'The number is greater than 0.8'
} else if (randomNumber > 0.5) {
  message = 'The number is greater than 0.5: ' + randomNumber
} else {
  message = `The number is ${randomNumber}`
}
console.log(message)

// if-else comprehension
const result = 10 > 5 ? true : false
console.log(result)

// for
var i = 30
for (var i = 0; i < 10; i++) {
  console.log(i)
}
console.log(i)

// function
function basicFunction() {
  var x = 1
  if (true) {
    var x = 2
    console.log(x)
  }
  console.log(x)
}

basicFunction()

function add(num1, num2) {
  return num1 + num2
}
console.log(add(2, 10))

const sub = function (num1, num2) {
  return num1 - num2
}
console.log(sub(10, 2))

const print = (c) => {
  console.log(`You entered ${c}.`)
}
print('change')

let square = num => num ** 2
console.log(square(4))

let returnObject = () => ({ key: 'value' })
console.log(returnObject())

let noArgs = _ => 'No args.'
console.log(noArgs())

const use = (item='default') => `${item} exist.`
console.log(use())

// scope
let x = 1
if (x === 1) {
  let x = 2
  console.log(x)
}
console.log(x)

// array
const numbers = [1, 2, 3, 4, 5]

console.log(numbers[0])
console.log(numbers.length)

console.log(numbers.reverse())
console.log(numbers)

numbers.push(6)
console.log(numbers)

numbers.pop()
console.log(numbers)

numbers.unshift(6)
console.log(numbers)

numbers.shift()
console.log(numbers)

console.log(numbers.includes(1))
console.log(numbers.includes(100))

console.log(numbers.indexOf(1))
console.log(numbers.indexOf(100))

console.log(numbers.join())

// object
const person = {
  name: 'defaultName',
  product: {
    phone: 'defaultPhone',
    notebook: 'defaultNotebook'
  }
}

console.log(person.name)
console.log(person.product.notebook)

let programmingLanguage = ['node', 'python']
let sample = {
  a: ['A', 'B'],
  1: [2, 3]
}

let objectInObject = {
  programmingLanguage,
  sample
}
console.log(objectInObject)

const jsonData = JSON.stringify(person)
console.log(jsonData)

const parseData = JSON.parse(jsonData)
console.log(parseData)

// method
// forEach
let colors = ['red', 'green', 'blue']
colors.forEach(function (color, idx, array) {console.log(color, idx, array)})
colors.forEach((color, idx, array) => {console.log(color, idx, array)})

const posts = [
  {
    id: 50,
    title: 'node',
  },
  {
    id: 100,
    title: 'python',
  },
]
posts.forEach(post => console.log(post, post.id, post.title))

const postData = []
posts.forEach(post => postData.push(post.id + ' ' + post.title))
console.log(postData)

// map
const newNumbers = [1, 2, 3, 4, 5]

const double = newNumbers.map(function (number) {return 2 * number})
console.log(double)

const triple = newNumbers.map(number => 3 * number)
console.log(triple)

square = [
  {
    height: 10,
    width: 20,
  },
  {
    height: 15,
    width: 25,
  },
  {
    height: 50,
    width: 15,
  },
]

const areas = square.map(square => square.height * square.width)
console.log(areas)

// filter
const booleans = [true, false, false, true, true, false]

const isTrue = booleans.filter(function (bool) {return bool % 2 === 1})
console.log(isTrue)

const products = [
  {
    name: 'cucumber',
    type: 'vegetable'
  },
  {
    name: 'banana',
    type: 'fruit'
  },
  {
    name: 'carrot',
    type: 'vegetable'
  },
  {
    name: 'apple',
    type:'fruit'
  },
]

const fruits = products.filter(product => product.type === 'fruit')
console.log(fruits)

// reduce
const scores = [100, 80, 88, 92, 95, 70]

const sum = scores.reduce((res, score) => {return res += score}, 0)
console.log(sum)

const avg = scores.reduce((res, score) => res += score / scores.length, 0)
console.log(avg)

// find
const samples = [
  {
    id: 1,
    string: 'a'
  },
  {
    id: 2,
    string: 'b'
  },
  {
    id: 3,
    string: 'c'
  },
  {
    id: 4,
    string: 'd'
  },
  {
    id: 5,
    string: 'e'
  },
]

const isEven = samples.find(function (sample) {return sample.id % 2 === 0})
console.log(isEven)

const biggerThanC = samples.find(function (sample) {return sample.string > 'c'})
console.log(biggerThanC)
