import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const auth = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  if (!req.headers.authorization)
    return res.status(401).json({ error: 'Unauthorization' })
  
  let secretKey = process.env.JWT_SECRET_KEY || 'rahsia'
  const token: string = req.headers.authorization.split(' ')[1]
  
  try {
    const credentials: string | object = await jwt.verify(token, secretKey)
    
    if (!credentials)
      return res.status(401).json({ error: 'Token Invalid' })
    
    req.app.locals.credentials = credentials
    next()
  } catch (error) {
    return res.status(400).json({ error })
  }

}