const readline = require('readline')
const name = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  }
)

name.question('What is your name?: ', answer => {
  console.log(answer)
  name.close()
})

const userName = prompt('Who are you?')

let userResult = ''
if (userName === 'admin') {
  userResult = 'Welcome, Admin!'
} else if (userName === 'happy') {
  userResult = 'Happy!'
} else {
  userResult = `Hi, ${userName}!`
}

console.log(userResult)

const number = prompt('Press a number?')

let numberResult = ''
switch (number) {
  case 1: {
    numberResult = 'It is one.'
    break
  }
  case 2: {
    numberResult = 'It is two.'
    break
  }
  default: {
    numberResult = `It is ${number}.`
  }
}

console.log(numberResult)

let i = 0
while (i < 5) {
  console.log(i)
  i++
}

for (let i = 0; i < 5; i++) {
  console.log(i)
}

const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8]
for (let number of numbers) {
  console.log(number)
}
