import { createServer, request} from 'node:http'

const server = createServer((request, response) => {
    response.write('Hello World')
    
    return response.end()
})

server.listen(5000)