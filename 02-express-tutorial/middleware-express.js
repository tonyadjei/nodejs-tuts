const express = require('express')
const app = express()
const logger = require('./logger')

app.use('/api', logger)

app.get('/', (req, res) => {
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
