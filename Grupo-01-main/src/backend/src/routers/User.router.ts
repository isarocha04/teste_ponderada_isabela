import AbstractRouter from './Router';
import UserController from '../controllers/User.controller';
import UserService from '../services/user/User.service';
import UserRepository from '../repositories/user/User.repository';
import IMysqlConnection from '../connections/mysql/IMysql.connection';

export default class UserRouter extends AbstractRouter {
    private userController: UserController;

    constructor(databaseConnection: IMysqlConnection) {
        super();
        this.userController = new UserController(new UserService(new UserRepository(databaseConnection)));
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get('/', this.userController.list);
        this.router.post('/', this.userController.create);
        this.router.get('/:id', this.userController.findById);
        this.router.patch('/:id', this.userController.updateById);
        this.router.delete('/:id', this.userController.deleteById);
    }
}
