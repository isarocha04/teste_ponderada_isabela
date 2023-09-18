import AbstractRouter from './Router';
import TeacherController from '../controllers/Teacher.controller';
import TeacherService from '../services/teacher/Teacher.service';
import TeacherRepository from '../repositories/teacher/Teacher.repository';
import IMysqlConnection from '../connections/mysql/IMysql.connection';

export default class TeacherRouter extends AbstractRouter {
    private teacherController: TeacherController;

    constructor(databaseConnection: IMysqlConnection) {
        super();
        this.teacherController = new TeacherController(new TeacherService(new TeacherRepository(databaseConnection)));
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get('/', this.teacherController.list);
        this.router.post('/', this.teacherController.create);
        this.router.get('/:id', this.teacherController.findById);
        this.router.patch('/:id', this.teacherController.updateById);
        this.router.delete('/:id', this.teacherController.deleteById);
    }
}
