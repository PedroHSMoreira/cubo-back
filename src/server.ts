import * as jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

import AuthMiddleware from "./middlewares/auth.middleware";
import AuthorizationController from "./controllers/authz.controller";

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.post('/login', AuthMiddleware.handleAuthentication)
server.use('/participation', AuthorizationController.handleAuthorization)

server.use(router)

server.listen(3002, () => {
    console.log('Server is running')
})