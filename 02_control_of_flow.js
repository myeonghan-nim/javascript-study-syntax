const readline = require('readline')
const name = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  }
)

name.question('name?: ', answer => {
  console.log(answer)
  name.close()
})

const userName = prompt('Who are you?')
let message1 = ''

if (userName === 'admin') {
  message1 = 'admin page'
} else if (userName === 'happy') {
  message1 = 'I`m Happy!'
} else {
  message1 = `Hi, ${userName}!`
}

console.log(message1)

const number = prompt('number?')
let message2 = ''

switch (number) {
  case 1: {
    message2 = 'one'
    break
  }
  case 2: {
    message2 = 'two'
    break
  }
  default: {
    message2 = `???`
  }
}

console.log(message2)

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
