const http = require('http')
const { readFileSync } = require('fs')

// read data from html file
const homePageHtml = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  console.log(url)
  if (url === '/') {
    // the 'text/html', 'text/plain', 'application/json' are known as MIME types
    res.writeHead(200, { 'content-type': 'text/html' })
    // signal to the client that all the response headers and body have been sent
    // res.write('<h1>welcome page</h1>')
    res.write(homePageHtml)
    res.end()
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  } else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  } else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  } else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>Could not find request page</h1>')
    res.end()
  }
})

// ports equal to or less than 1024 are reserved for the system e.g. 80(http), 443(https)
server.listen(5000)
