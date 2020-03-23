import { Request, Response } from 'express'
import { User, users } from '../schemas/user'

import * as jwt from 'jsonwebtoken'

const isValid = (user: User): boolean => {
    if (!user) {
        return false
    }
    const dbUser = users[user.email]
    return dbUser != undefined && dbUser.matches(user)
}

class AuthMiddleware {
    public handleAuthentication(req: Request, res: Response) {
        const user: User = req.body
        if (isValid(user)) {
            const dbUser = users[user.email]
            const token = jwt.sign({ sub: dbUser.email, iss: 'cubo-api' }, 'cubo-api-password')
            res.send({ name: dbUser.name, email: dbUser.email, accessToken: token })
        } else {
            res.status(400).send({message: 'Invalid data.'})
        }
    }
}

export default new AuthMiddleware()