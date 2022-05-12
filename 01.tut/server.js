// how nodejs differs from vanilla js
// 1)node runs on a server -not in a browser
// 2)the console is the terminal window
// 3)global object instead of window object console.log(global)
// 4)has common core modules that we will explore
// 5)commonjs modules instead of es6 modules
// 6)missing some js apis like fetch



const os = require('os');
const path = require('path');
const { add, subtract, divide, multiply } = require('./math');

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)
// console.log(path.parse(__filename))
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

console.log(add(2,3))
console.log(multiply(2,3))
console.log(divide(2,3))
console.log(subtract(2,3))