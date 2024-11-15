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


// const fs = require('fs')


//SYNCHRONOUS BEHAVE***********

//readdirSync behave synchronously so only one argewment it takes as path
// const files = fs.readdirSync('./')
// console.log('files',files)  // [ '.git', 'app.js', 'logger.js' ] (files that have in current directory showing here)



//ASYNCHRONOUS BEHAVE*************

// fs.readdir('$', function(err,files) {
//     if(err) console.log(err)  // err 
//     // [Error: ENOENT: no such file or directory, scandir '$'] {
//     //     errno: -2,
//     //     code: 'ENOENT',
//     //     syscall: 'scandir',
//     //     path: '$'
//     //   }

//      else console.log(files)  // [ '.git', 'app.js', 'logger.js' ] (files that have in current directory showing here)
// })




//events module (EventEmmiter) -----------------

//Register a listner
// const EventEmmiter = require('events')
// const emitter = new EventEmmiter()

//Raise a event
// emitter.on('myEvent', function(){
//     console.log('Bidyut Myevent is called')
// })

// emitter.emit('myEvent')



//With Argewment**************

//Register a listner
// const EventEmmiter = require('events')
// const emitter = new EventEmmiter()

// // Raise a event
// emitter.on('myEvent', function(arg){
//     console.log('Bidyut Myevent is called',arg)
// })

// emitter.emit('myEvent',{id: 1, name: 'Bidyut'})



//to extends the eventEmitter
const EventEmmiter = require('events')

const MyLogger = require('./logger')
const log = new MyLogger()

//Register a listner
log.on('myEvent', (arg) => {
    console.log('eventEmitter is working now',arg)
})

log.log("Message")