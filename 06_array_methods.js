// define array
let colors = ['red', 'green', 'blue']

// array.forEach()(same as for)
for (let color of colors) {
  console.log(color)
}

colors.forEach(function (color, idx, array) {
  console.log(color, idx, array)
})

colors.forEach((color, idx, array) => {
  console.log(color, idx, array)
})

// if variable and value is only one
colors.forEach(color => console.log(color))

// array.forEach() with object
function handlePosts () {
  const posts = [
    {
      id: 50,
      title: 'javascript',
    },
    {
      id: 100,
      title: 'python',
    },
    {
      id: 125,
      title: 'css',
    },
  ]

  for (let i = 0; i <posts.length; i++) {
    console.log(posts[i])
    console.log(posts[i].id)
    console.log(posts[i].title)
  }

  posts.forEach(post => console.log(post, post.id, post.title))
}

handlePosts()

const images = [
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
const areas = []

images.forEach(image => areas.push(image.height * image.width))
images.forEach(function (image) {
  areas.push(image.height * image.width)
})

console.log(areas)


// array.map()(returns value)
const numbers = [1, 2, 3, 4, 5]
const doubleNumbers = []

numbers.forEach(number => doubleNumbers.push(2 * number))

const double = numbers.map(function (number) {
  return 2 * number
})
const double = numbers.map(number => 2 * number)

console.log(doubleNumbers)
console.log(double)

// array.map() with object
const images = [
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
const areas = images.map(image => image.height * image.width)

console.log(areas)


// array.filter()(same as python filter)
const numbers = [1, 2, 3, 4, 5]
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0
})

console.log(evenNumbers)

// array.filter() with object
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


// array.reduce()
const scores = [100, 80, 88, 92, 95, 70]
const total = scores.reduce((total, score) => {
  return total += score
}, 0)
const total = scores.reduce((total, score) => total += score, 0)

console.log(total)


// array.find()(returns first found element in objects)
const users = [
  {
    name: 'change',
    location: 'gj'
  },
  {
    name: 'justin',
    location: 'gm'
  },
  {
    name: 'tak',
    location: 'dj'
  },
  {
    name: 'junho',
    location: 'dj'
  },
  {
    name: 'neo',
    location: 'so'
  },
]
const user = users.find(function (user) {
  return user.name === 'neo'
})
const user = users.find(function (user) {
  return user.location === 'dj'
})

console.log(user)