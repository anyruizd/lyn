const http = require('http')
const map = require('through2-map')

const port = process.argv[2]
const hostname = '127.0.0.1'

const server = http.createServer((request, response) => {

  if (request.method === 'POST') {
    request
    .pipe(map(chunk => {
      return chunk.toString().toUpperCase()
    }))
    .pipe(response)
  } else {
    response.statusCode = 404;
    response.end();
  }
})

server.listen(port, hostname, () => {
  console.log(`Listening on port ${port}`)
})