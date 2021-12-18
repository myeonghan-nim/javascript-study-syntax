// object
const person = {
  name: 'unknown',
  product: {
    phone: 'S10 5G',
    notebook: 'HP Omen'
  }
}

console.log(person.name)
console.log(person.product.notebook)

let books = ['node', 'python']
let comics = {
  a: ['A', 'B'],
  1: [2, 3]
}
let bookStore = {
  books,
  comics
}

console.log(bookStore)

const jsonData = JSON.stringify(person)
console.log(jsonData)

const parseData = JSON.parse(jsonData)
console.log(parseData)
