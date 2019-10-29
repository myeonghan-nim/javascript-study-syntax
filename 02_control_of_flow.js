// input and output in node.js
const readline = require('readline')
const userName = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  }
)

userName.question('input your name : ', answer => {
  console.log(answer)
  userName.close()
})


// input and output with HTML
const userName = prompt('who are you?')

let message = ''

if (userName === 'jmh') {
  message = 'hi, admin'
} else if (userName === 'happy') {
  message = 'happy coding'
} else {
  message = `hi, ${userName}`
}

console.log(message)


// input and output with switch
const userName = prompt('who are you?')

let message = ''

switch (userName) {
  case 'admin': {
    message = 'cannot login'
    break
  }
  case 'jmh': {
    message = 'hi, admin'
    break
  }
  default: {
    // alway run after run switch
    message = `hi, ${userName}`
  }
}

console.log(message)


// loop
let i = 0

while (i < 5) {
  console.log(i)
  i++
}

for (let i = 0; i < 5; i++) {
  console.log(i)
}

// loop in array
const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8]

for (let number of numbers) {
  console.log(number)
}