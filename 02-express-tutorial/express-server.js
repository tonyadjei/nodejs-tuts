/*
====================
BASIC EXPRESS SERVER
====================
*/
// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   res.status(200).send('Home Page')
// })

// app.get('/about', (req, res) => {
//   res.status(200).send('About page')
// })

// app.all('*', (req, res) => {
//   res.status(404).send('<h1>Resource not found</h1>')
// })

// app.listen(5000, () => {
//   console.log('server is up and running')
// })

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

/*
=========================
NAVBAR EXPRESS SERVER APP
=========================
*/

const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
// res.sendFile(path.resolve('./navbar-app/index.html'))
// alternatively, we can just put the html file inside our static assets folder
// or send the file via SSR (Server-side rendering using template engines)
// })

app.all('*', (req, res) => {
  res.status(404).send('Resource not found')
})

app.listen(5000, () => {
  console.log('Server is up and running')
})
