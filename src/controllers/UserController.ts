import { Request, Response } from 'express'
import IController from './ControllerInterface'

class UserController implements IController {
  index(req: Request, res: Response): Response {
    let credentials = req.app.locals.credentials
    return res.json(credentials)
  }

  create(req: Request, res: Response): Response {
    return res.json('Hello Users!')
  }

  show(req: Request, res: Response): Response {
    return res.json('Hello Users!')
  }

  update(req: Request, res: Response): Response {
    return res.json('Hello Users!')
  }

  delete(req: Request, res: Response): Response {
    return res.json('Hello Users!')
  }
  
}

export default new UserController()
