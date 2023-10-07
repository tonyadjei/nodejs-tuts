// createReadStream will return an instance of fs.ReadStream
// fs.ReadStream extends streams.Readable and so it has the 'data', 'error' and 'end' events
const { createReadStream } = require('fs')

// default buffer/chunk size is 64kb
// last buffer/chunk read is the remainder
// highWaterMark sets the buffer/chunk size
// createReadStream reads a file in chunks
// encoding will use the specified encoding and return the contents of the file (thus the buffer raw data will not be returned)

// const stream = createReadStream('./content/large-file.txt', {highWaterMark: 90000})
// const stream = createReadStream('./content/large-file.txt', {encoding: 'utf8'})

const stream = createReadStream('./content/large-file.txt')

// 'data' event is emitted each time a chunk has been read (default chunk size is 64kb)
stream.on('data', (result) => {
  console.log(result, 'I LOVE YOU\n')
})

// when all the data has been successfully read, the 'end' event is emitted
stream.on('end', () => {
  console.log('streaming completed: Data successfully read')
})

stream.on('error', (err) => {
  console.log(err)
})
