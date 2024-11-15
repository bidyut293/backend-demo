// const url = 'https://loggerjs.in'

// function log (message) {
//     console.log(`Hello ${message} Module is export like this`)
// }

// const check = () => {
//     console.log('HelloBidyut')
// }

// module.exports.log = log
// module.exports.check = check



//Extends EventEmitter
const EventEmmiter = require('events')

class Logger extends EventEmmiter {
    log(msg) {
        console.log('msg',msg)

        this.emit('myEvent', {id:1, name:'Bidyut'})
    }
}

module.exports = Logger