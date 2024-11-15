//Custom module and exports that module
// var logger = require('./logger')

// logger.log('BIDYUT')
// logger.check()
// console.log(logger)





// PATH Module
const path = require('path')

var pathObj = path.parse(__filename)

console.log('pathObj',pathObj)

// output :
// pathObj {
//     root: '/',
//     dir: '/Users/bidyutsamanta/Desktop/Backend/Nodejs/first-app',
//     base: 'app.js',
//     ext: '.js',
//     name: 'app'
//   }