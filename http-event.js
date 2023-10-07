// http module using Event Emitter API

const http = require('http')

const server = http.createServer()

// listen for / subscribe to / respond to event
server.on('request', (req, res) => {
  res.end('i love pancakes')
})

server.listen(5000)
