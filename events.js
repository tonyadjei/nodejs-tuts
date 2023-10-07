// EventEmitter is a class
const EventEmitter = require('events')

// EventEmitter object (instance)
// on this object we can sub
const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
  console.log(`data received ${name} and ${id}`)
})

customEmitter.on('response', () => {
  console.log(`data eaten`)
})

customEmitter.emit('response', 'tony', 40)
