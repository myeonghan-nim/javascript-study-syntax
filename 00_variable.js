// characteristics of let
/*
let x = 1
let x = 2  // let cannot define same variable

x = 3

console.log(x)
*/


// block-scope
/*
let x = 1

if (x === 1) {
  let x = 2
  console.log(x)  // variables can alive in block-scope
}
console.log(x)
*/


// diff of variable types
/*
let x  // let only define variable
const y = 9  // const define variable and value

if (y === 9) {
  const y = 10
  console.log(y)
}
console.log(y)
*/


// variable type var(~ES5)
/*
function varTest() {
  var x = 1

  if (true) {
    var x = 2
    console.log(x)
  }
  console.log(x)  // var has function-scope
}

varTest()
console.log(x)
*/