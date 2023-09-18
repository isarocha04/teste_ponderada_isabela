import IMysqlConnection from '../../connections/mysql/IMysql.connection';
import {
    IPrototypeDatabase,
    IPrototypeDatabaseCreate,
    IPrototypeDatabaseUpdate,
} from '../../dto/database/IPrototype.database.dto';
import Repository from '../Repository';

export default class PrototypeRepository extends Repository<
    IPrototypeDatabase,
    IPrototypeDatabaseCreate,
    IPrototypeDatabaseUpdate
> {
    constructor(databaseConnection: IMysqlConnection) {
        super('omp_prototype', databaseConnection);
    }
}
