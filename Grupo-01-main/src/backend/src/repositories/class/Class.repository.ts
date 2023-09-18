import IMysqlConnection from '../../connections/mysql/IMysql.connection';
import { IClassDatabase, IClassDatabaseCreate, IClassDatabaseUpdate } from '../../dto/database/IClass.database.dto';
import Repository from '../Repository';

export default class ClassRepository extends Repository<IClassDatabase, IClassDatabaseCreate, IClassDatabaseUpdate> {
    constructor(databaseConnection: IMysqlConnection) {
        super('omp_class', databaseConnection);
    }

    listWithCourse = async (): Promise<(IClassDatabase & {course_name: string})[]> => {
        return this.databaseConnection.doSelect(`
            SELECT 
                ${this.tableName}.*,
                omp_course.name as course_name
            FROM ${this.tableName}
                INNER JOIN omp_course ON ${this.tableName}.course_id = omp_course.id
        `);
    }
}
