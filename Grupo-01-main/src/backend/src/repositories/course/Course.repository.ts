import IMysqlConnection from '../../connections/mysql/IMysql.connection';
import { ICourseDatabase, ICourseDatabaseCreate, ICourseDatabaseUpdate } from '../../dto/database/ICourse.database.dto';
import Repository from '../Repository';

export default class CourseRepository extends Repository<
    ICourseDatabase,
    ICourseDatabaseCreate,
    ICourseDatabaseUpdate
> {
    constructor(databaseConnection: IMysqlConnection) {
        super('omp_course', databaseConnection);
    }
}
