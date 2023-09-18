import IMysqlConnection from '../../connections/mysql/IMysql.connection';
import { IModuleDatabase, IModuleDatabaseCreate, IModuleDatabaseUpdate } from '../../dto/database/IModule.database.dto';
import Repository from '../Repository';

export default class ModuleRepository extends Repository<
    IModuleDatabase,
    IModuleDatabaseCreate,
    IModuleDatabaseUpdate
> {
    constructor(databaseConnection: IMysqlConnection) {
        super('omp_module', databaseConnection);
    }
}
