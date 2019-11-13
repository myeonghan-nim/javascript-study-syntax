// +, -, *, / operation
let a = 0

a = a + 3
console.log(a)

a += 3
console.log(a)

a++
console.log(a)


// compare operation
console.log(3 < 2)
console.log('a' < 'b')
console.log('a' < 'A')

console.log(1 == '1')
console.log(1 === '1')
console.log(1 === Number('1'))

console.log(true && false)  // and
console.log(true || false)  // or
console.log(!true)  // not


// comprehense operation
const b = 10
const result = b > 5 ? true : false  // same as A if .. else B

console.log(result)