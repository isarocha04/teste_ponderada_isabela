import AbstractRouter from './Router';
import CompetenceController from '../controllers/Competence.controller';
import CompetenceService from '../services/competence/Competence.service';
import CompetenceRepository from '../repositories/competence/Competence.repository';
import IMysqlConnection from '../connections/mysql/IMysql.connection';

export default class CompetenceRouter extends AbstractRouter {
    private competenceController: CompetenceController;

    constructor(databaseConnection: IMysqlConnection) {
        super();
        this.competenceController = new CompetenceController(
            new CompetenceService(new CompetenceRepository(databaseConnection)),
        );
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get('/', this.competenceController.list);
        this.router.post('/', this.competenceController.create);
        this.router.get('/:id', this.competenceController.findById);
        this.router.patch('/:id', this.competenceController.updateById);
        this.router.delete('/:id', this.competenceController.deleteById);
    }
}
