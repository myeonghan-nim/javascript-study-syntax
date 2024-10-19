// alert
alert('Hello, World!!!')

// single-line annotation
/*
multi
line
annotation
*/

// tag
document.write('<h1>Hello, JS!</h1>')

document.querySelector('h1')
document.querySelector('h1').innerText
document.querySelector('h1').innerText = 'Bye, JS!'

// variable declaration
var name = 'unknown'

let q = 1
document.write(q)

q = 2
document.write(q)

const w = 3
document.write(w)

// string
const fristName = 'Gil Dong'
const lastName = 'Hong'
const fullName = lastName + ' ' + fristName

document.write('<h1>' + fullName + '</h1>')
document.write(`<h1>${fullName}</h1>`)

// condition
const userName = prompt('Who are you?')

let message = ''
if (userName === 'admin') {
  message = '<h1>Welcome, admin!</h1>'
} else if (userName === 'happy') {
  message = '<h1>Happy!</h1>'
} else {
  message = `<h1>Hello, ${userName}!</h1>`
}

document.write(message)

// loop
var b = 30
for (var b = 0; b < 10; b++) {
  console.log(b)
}
console.log(b)

// compare
const a = 0
const s = '0'

console.log(a == s)
console.log(a === s)
