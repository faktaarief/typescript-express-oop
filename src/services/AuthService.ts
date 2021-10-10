import { Request } from 'express'
import Authentication from '../utils/Authentication'
const db = require('../db/models')

class AuthService {
  body: Request['body']
  params: Request['params']

  constructor(req: Request) {
    this.body = req.body
    this.params = req.params
  }

  store = async (): Promise<any>  => {
    const { username, password } = this.body
    
    const hashedPassword = await Authentication.passwordHash(password) 

    const user = await db.user.create({ username, password: hashedPassword })
    
    return user
  }
}

export default AuthService
