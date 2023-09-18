import IMysqlConnection from '../../connections/mysql/IMysql.connection';
import {
    IInitiativeDatabase,
    IInitiativeDatabaseCreate,
    IInitiativeDatabaseUpdate,
} from '../../dto/database/IInitiative.database.dto';
import Repository from '../Repository';

export default class InitiativeRepository extends Repository<
    IInitiativeDatabase,
    IInitiativeDatabaseCreate,
    IInitiativeDatabaseUpdate
> {
    constructor(databaseConnection: IMysqlConnection) {
        super('omp_initiative', databaseConnection);
    }

    getCounts = async (filters?: any) => {
        return await this.databaseConnection.doSelectOne(`
            SELECT
                (SELECT COUNT(${this.tableName}.id) FROM ${this.tableName}) as qt,
                (SELECT COUNT(${this.tableName}.id) FROM ${this.tableName} WHERE ${
            this.tableName
        }.status = 'PENDING') as qt_pending,
                (SELECT COUNT(${this.tableName}.id) FROM ${this.tableName} WHERE ${
            this.tableName
        }.status = 'ACCEPTED') as qt_accepted,
                (SELECT COUNT(${this.tableName}.id) FROM ${this.tableName} WHERE ${
            this.tableName
        }.status = 'DENIED') as qt_denied
            FROM ${this.tableName}
            ${filters ? `WHERE ${this.normalizeFilters(filters)}` : ''}
        `);
    };

    listWithModuleAndCompany = async () => {
        return await this.databaseConnection.doSelect(`
            SELECT ${this.tableName}.*,
                omp_company.name AS company_name,
                omp_module.name AS module_name,
                omp_module.course_id,
                omp_course.name AS course_name
            FROM ${this.tableName}
                INNER JOIN omp_company ON omp_company.id = ${this.tableName}.company_id
                INNER JOIN omp_module ON omp_module.id = ${this.tableName}.module_id
                INNER JOIN omp_course ON omp_course.id = omp_module.course_id
        `);
    }
}
