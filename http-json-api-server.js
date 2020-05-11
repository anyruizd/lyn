const http = require('http')
const port = process.argv[2] || 8080
const hostname = '127.0.0.1'

function getUnixTime (time) {
  return { "unixtime": time.getTime() }
}

function getParsedTime (time) {
  return { 
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  }
}

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
  const time = new Date(parsedUrl.searchParams.get('iso'))
  let result = ''

  if(parsedUrl.pathname === '/api/unixtime') {
    result = getUnixTime(time)
  } else if (parsedUrl.pathname === '/api/parsetime') {
    result = getParsedTime(time)
  }
  
  if (method === 'GET' && result) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(result))
  } else {
    response.statusCode = 404
    response.end()
  }
})

server.listen(port, () => {
  console.log(`Server up and running, listening on port ${port}`)
})