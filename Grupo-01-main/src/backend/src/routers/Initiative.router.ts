import AbstractRouter from './Router';
import InitiativeController from '../controllers/Initiative.controller';
import InitiativeService from '../services/initiative/Initiative.service';
import InitiativeRepository from '../repositories/initiative/Initiative.repository';
import IMysqlConnection from '../connections/mysql/IMysql.connection';

export default class InitiativeRouter extends AbstractRouter {
    private initiativeController: InitiativeController;

    constructor(databaseConnection: IMysqlConnection) {
        super();
        this.initiativeController = new InitiativeController(
            new InitiativeService(new InitiativeRepository(databaseConnection)),
        );
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get('/', this.initiativeController.list);
        this.router.post('/', this.initiativeController.create);
        this.router.get('/:id', this.initiativeController.findById);
        this.router.patch('/:id', this.initiativeController.updateById);
        this.router.delete('/:id', this.initiativeController.deleteById);
    }
}
