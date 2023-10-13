const express = require('express')
const app = express()

let { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home page </h1> <a href="/api/products"> products </a>')
})

app.get('/api/products', (req, res) => {
  let newProducts = products.map((product) => {
    let { id, name, image } = product
    return { id, name, image }
  })
  res.json(newProducts)
})

//ROUTE PARAMETERS (req.params)
app.get('/api/products/:productID', (req, res) => {
  let { productID } = req.params
  let product = products.find((product) => {
    return product.id === Number(productID)
  })
  if (!product) {
    res.status(404).send('Sorry, that resource does not exist.')
  }
  res.json(product)
})

// QUERY PARAMETERS (req.query) (technically, they are not part of the URL, if they are present however, they can be handled by the server)
app.get('/api/v1/query', (req, res) => {
  // create copy of products, so as to not modify the original one
  let sortedProducts = [...products]
  let { search, limit } = req.query

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    return res.status(404).json({ success: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is up and running on port 5000')
})
