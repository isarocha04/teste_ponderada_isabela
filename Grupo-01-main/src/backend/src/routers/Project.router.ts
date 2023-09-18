import AbstractRouter from './Router';
import ProjectController from '../controllers/Project.controller';
import ProjectService from '../services/project/Project.service';
import ProjectRepository from '../repositories/project/Project.repository';
import IMysqlConnection from '../connections/mysql/IMysql.connection';

export default class ProjectRouter extends AbstractRouter {
    private projectController: ProjectController;

    constructor(databaseConnection: IMysqlConnection) {
        super();
        this.projectController = new ProjectController(new ProjectService(new ProjectRepository(databaseConnection)));
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get('/', this.projectController.list);
        this.router.post('/', this.projectController.create);
        this.router.get('/:id', this.projectController.findById);
        this.router.patch('/:id', this.projectController.updateById);
        this.router.delete('/:id', this.projectController.deleteById);
    }
}
