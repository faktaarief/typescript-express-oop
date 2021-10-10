import UserController from '../controllers/UserController'
import { auth } from '../middlewares/AuthMiddleware'
import BaseRouter from './BaseRouter'

class UserRoutes extends BaseRouter {
  public routes(): void {
    this.router.get('/', auth, UserController.index)
  }
}

export default new UserRoutes().router
