const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// our own middleware
app.use([logger, authorize])

// third-party middleware
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  console.log(req.user)
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/api/items', (req, res) => {
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is up and running on port 5000')
})
