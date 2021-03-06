import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import { config as dotenv } from 'dotenv'

import UserRoutes from './routers/UserRoutes'
import AuthRoutes from './routers/AuthRoutes'

class App {
  public app: Application

  constructor() {
    this.app = express()
    this.plugins()
    this.routes()
    dotenv()
  }

  protected plugins(): void {
    this.app.use(express.json())
    this.app.use(morgan('dev'))
    this.app.use(compression())
    this.app.use(helmet())
    this.app.use(cors())
  }

  protected routes(): void {
    this.app.use('/api/v1/users', UserRoutes)
    this.app.use('/api/v1/auth', AuthRoutes)
  }
  
}

const app = new App().app
const PORT = process.env.PORT 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
