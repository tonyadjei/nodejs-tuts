// http module using Event Emitter API

const http = require('http')

const server = http.createServer()

//server instance will by default emit a 'request' event
// when a request from the client is received

// listen for / subscribe to / respond to event
server.on('request', (req, res) => {
  res.end('i love pancakes')
})

server.listen(5000)
