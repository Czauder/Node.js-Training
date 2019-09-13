// console.log(process.argv.slice(2,3))

const parseArgs = require('minimist');
const handleComand = require('./handleCommand')


const command = parseArgs(process.argv.slice(2, 3));
delete command._
console.log(command)



handleComand(command)