import * as jsonServer from 'json-server'

const server = jsonServer.create()

server.listen(3001, () => {
    console.log('Server is running')
})