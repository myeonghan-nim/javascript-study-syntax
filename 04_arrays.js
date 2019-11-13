// array
const numbers = [1, 2, 3, 4, 5]

console.log(numbers[0])
console.log(numbers.length)

// inner functions
console.log(numbers.reverse())  // change original array
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
console.log(numbers.indexOf(100))  // return -1, when there is not number in array

console.log(numbers.join())