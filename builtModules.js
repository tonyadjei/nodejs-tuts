const os = require('os')

console.log(os.userInfo())

console.log(os.uptime())

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
}
console.log(currentOs)
