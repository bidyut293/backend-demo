const url = 'https://loggerjs.in'

function log (message) {
    console.log(`Hello ${message} Module is export like this`)
}

const check = () => {
    console.log('HelloBidyut')
}

module.exports.log = log
module.exports.check = check