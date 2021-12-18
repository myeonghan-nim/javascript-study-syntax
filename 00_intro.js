// alert
alert('Hello, World!!!')

// single note
/*  multi note */

// write tag
document.write('<h1>Hello, World!</h1>')

// select tag
document.querySelector('h1')
document.querySelector('h1').innerText
document.querySelector('h1').innerText = 'Bye~'

// variable
var name = 'unknown'
console.log(name)

// loop
var b = 30
for (var b = 0; b < 10; b++) {
  console.log(b)
}
// console.log(b)

// types
let q = 1
document.write(q)

q = 2
document.write(q)

const w = 3
document.write(w)

// b = 4
// document.write(loc)

// calculation
const first_name = 'gil-dong'
const last_name = 'hong'
const full_name = last_name + ' ' + first_name

document.write('<h1>' + full_name + '</h1>')
document.write(`<h1>${full_name}</h1>`)
console.log(`<h1>${full_name}</h1>`)

// condition
const userName = prompt('Hi, who are you???')
let message = ''

if (userName === 'admin') {
  message = '<h1>admin page</h1>'
} else if (userName === 'happy') {
  message = '<h1>I`m Happy!</h1>'
} else {
  message = `<h1>Hello, ${userName}!</h1>`
}

document.write(message)

// compare
const a = 0
const s = '0'

console.log(a == s)
console.log(a === s)
