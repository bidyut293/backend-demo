//Custom module and exports that module
// var logger = require('./logger')

// logger.log('BIDYUT')
// logger.check()
// console.log(logger)





// path MODULE-----------

// const path = require('path')

// var pathObj = path.parse(__filename)

// console.log('pathObj',pathObj)

// output :
// pathObj {
//     root: '/',
//     dir: '/Users/bidyutsamanta/Desktop/Backend/Nodejs/first-app',
//     base: 'app.js',
//     ext: '.js',
//     name: 'app'
//   }




//os MODULE-------------

// const os = require('os')

// var TotalMemory = os.totalmem()
// var FreeMemory = os.freemem()

// console.log('TotalMemory',TotalMemory)  //TotalMemory 8589934592
// console.log('FreeMemory',FreeMemory)  //FreeMemory 61587456



//fs Module-------------
const fs = require('fs')

//readdirSync behave synchronously so only one argewment it takes as path
const files = fs.readdirSync('./')
console.log('files',files)  // [ '.git', 'app.js', 'logger.js' ] (files that have in current directory showing here)