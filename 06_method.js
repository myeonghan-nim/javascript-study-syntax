// loop
let colors = ['red', 'green', 'blue']

colors.forEach(function (color, idx, array) {
  console.log(color, idx, array)
})
colors.forEach((color, idx, array) => {
  console.log(color, idx, array)
})

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

const result = []
posts.forEach(post => result.push(post.id + ' ' + post.title))

console.log(result)

// map
const numbers = [1, 2, 3, 4, 5]

const double = numbers.map(function (number) {
  return 2 * number
})
console.log(double)

const triple = numbers.map(number => 3 * number)
console.log(triple)

const square = [
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

const isTrue = booleans.filter(function (bool) {
  return bool % 2 === 1
})
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

const sum = scores.reduce((res, score) => {
  return res += score
}, 0)
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

const isEven = samples.find(function (sample) {
  return sample.id % 2 === 0
})
console.log(isEven)

const biggerThanC = samples.find(function (sample) {
  return sample.string > 'c'
})
console.log(biggerThanC)
