const http = require('http')
const port = process.argv[2]
const hostname = '127.0.0.1'

const server = http.createServer((request, response) => {
  request.on('error', (error) => {
    console.error(error)
    response.statusCode = 400
    response.end()
  })
  response.on('error', (error) => {
    console.log(error)
  })

  const { url: rawUrl, method } = request
  const parsedUrl = new URL(rawUrl,`http://${hostname}:${port}`)
  const date = new Date(parsedUrl.searchParams.get('iso'))
  response.writeHead(200, { 'Content-Type': 'application/json' })
  if (method === 'GET') {
    if (parsedUrl.pathname === '/api/unixtime') {
      const res = JSON.stringify({ "unixtime": date.getTime()})
      response.end(res)
    } else if (parsedUrl.pathname === '/api/parsetime') {
      const hour = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()

      const res = JSON.stringify(
        { "hour": hour,
          "minute": minutes,
          "second": seconds
        })
      response.end(res)
    } else {
      response.statusCode = 404
      response.end()
    }
  } else {
    response.statusCode = 404
    response.end()
  }
})

server.listen(port, () => {
  console.log(`Server up and running, listening on port ${port}`)
})