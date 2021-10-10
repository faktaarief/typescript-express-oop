import { Request, Response, NextFunction} from 'express'
import { check, validationResult } from 'express-validator'

const validate = [
  check('username', 'Field username must be string!').isString(),
  check('password', 'Minimum of password length is 6 characters.').isLength({ min: 6 }),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() })
    
    next()
  }
]

export default validate
