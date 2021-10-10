import { Request, Response } from 'express'
import AuthService from '../services/AuthService'
import Authentication from '../utils/Authentication'
const db = require('../db/models')

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    const service: AuthService = new AuthService(req)
    const user = await service.store()

    return res.json(user)
  }

  login = async (req: Request, res: Response): Promise<Response> => {
    // Get data user by username
    let { username, password } = req.body
    const user = await db.user.findOne({ where: { username } })

    // Check password
    if (!user) 
      return res.status(404).json({ error: 'User not found' })

    let compare = await Authentication.passwordCompare(password, user.password)

    // Generate Token
    if (!compare)
      return res.status(404).json({ error: 'Username or Password Wrong.' })

    let token = await Authentication.generateToken(user.id, username, user.password)

    return res.json({ token })
  }

}

export default new AuthController()