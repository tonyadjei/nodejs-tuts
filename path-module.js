const path = require('path')

console.log(path.sep)

// path.join will generate a normalized file path
const filePath = path.join('content/', 'subfolder/', 'textfile.txt/')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

// path.resolve will generate a normalized absolute file path
const absolute = path.resolve('content', 'subfolder', 'textfile.txt')
console.log(absolute)
