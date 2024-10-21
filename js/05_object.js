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
