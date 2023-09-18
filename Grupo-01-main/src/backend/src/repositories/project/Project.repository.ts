import IMysqlConnection from '../../connections/mysql/IMysql.connection';
import {
    IProjectDatabase,
    IProjectDatabaseCreate,
    IProjectDatabaseUpdate,
} from '../../dto/database/IProject.database.dto';
import Repository from '../Repository';

export default class ProjectRepository extends Repository<
    IProjectDatabase,
    IProjectDatabaseCreate,
    IProjectDatabaseUpdate
> {
    constructor(databaseConnection: IMysqlConnection) {
        super('omp_project', databaseConnection);
    }

    listWithCompany = async (): Promise<(IProjectDatabase & {company_name: string})[]> => {
        return this.databaseConnection.doSelect(`
            SELECT 
                ${this.tableName}.*,
                omp_company.name as company_name
            FROM ${this.tableName}
                INNER JOIN omp_company ON ${this.tableName}.company_id = omp_company.id
            
        `);
    }
}
