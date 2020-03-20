import * as jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

import ParticipationController  from "./controllers/part.controller";

server.use(middlewares)

server.use(jsonServer.bodyParser)

// server.use('/participation', ParticipationController.create)

server.use(router)

server.listen(3001, () => {
    console.log('Server is running')
})