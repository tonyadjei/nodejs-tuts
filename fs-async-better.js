// const { readFile, writeFile } = require('fs')

// we can attach .promises to the require('fs') func and
// all functions we get from the 'fs' module will
// by default return promises
const { readFile, writeFile } = require('fs').promises

// const util = require('util')
// util.promisify lets an async func return a promise (so we can use async/await on it easily)
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// a read file wrapper function that returns a promise
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// .then().catch() approach to handle promises
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

// if your func awaits a promise, you need to set it up as an async func
const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result-async.txt',
      `Mistaku result: ${first} :: ${second}`
    )
    console.log(first, second)
  } catch (err) {
    console.log(err)
  }
}

start()
