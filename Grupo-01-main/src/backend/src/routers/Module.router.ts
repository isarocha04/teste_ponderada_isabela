import AbstractRouter from './Router';
import ModuleController from '../controllers/Module.controller';
import ModuleService from '../services/module/Module.service';
import ModuleRepository from '../repositories/module/Module.repository';
import IMysqlConnection from '../connections/mysql/IMysql.connection';

export default class ModuleRouter extends AbstractRouter {
    private moduleController: ModuleController;

    constructor(databaseConnection: IMysqlConnection) {
        super();
        this.moduleController = new ModuleController(new ModuleService(new ModuleRepository(databaseConnection)));
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get('/', this.moduleController.list);
        this.router.post('/', this.moduleController.create);
        this.router.get('/:id', this.moduleController.findById);
        this.router.patch('/:id', this.moduleController.updateById);
        this.router.delete('/:id', this.moduleController.deleteById);
    }
}
