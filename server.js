import { fastify } from 'fastify'

const server = fastify()

//Routes

server.post('/videos', () => {
    return 'Olá Mundo :)'
})

server.get('/videos', () => {
    return 'Olá Mundo :)'
})

server.put('/videos/:id', () => {
    return 'Olá Mundo :)'
})


server.delete('/videos/:id', () => {
    return 'Olá Mundo :)'
})



server.listen({
    port: 5000,
})