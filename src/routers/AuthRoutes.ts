import AuthController from '../controllers/AuthController'
import validate from '../middlewares/AuthValidator'
import BaseRouter from './BaseRouter'

class AuthRoutes extends BaseRouter {
  routes(): void {
    this.router.post('/register', validate, AuthController.register)
    this.router.post('/login', validate, AuthController.login)
  }
}

export default new AuthRoutes().router
