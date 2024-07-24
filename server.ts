import { IncomingMessage, ServerResponse } from "http"


const http = require('http')

const server = http.createServer()
server.on('request', (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, {
    'Content-Type' : 'text/plain'
  })
  res.end('Hello')
})

server.listen(8000, '127.0.0.1', (): void => {
  console.log('Listening on port 8000.....')
})