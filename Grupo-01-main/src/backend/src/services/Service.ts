import Repository from '../repositories/Repository';
import camelKeysToSnake from '../utils/camelKeysToSnake.util';
import snakeKeysToCamel from '../utils/snakeKeysToCamel.util';
export default abstract class Service<
    IEntity,
    IEntityCreate,
    IEntityUpdate,
    IRepository extends Repository<any, any, any> = Repository<any, any, any>,
> {
    protected repository: IRepository;
    constructor(repository: IRepository) {
        this.repository = repository;
    }

    async createAndFind(data: IEntityCreate): Promise<IEntity> {
        const createdId = await this.create(data);
        return this.findById(createdId) as IEntity;
    }

    async updateByIdAndFind(id: number | string, data: IEntityUpdate): Promise<IEntity | null> {
        await this.updateById(id, data);
        return this.findById(id);
    }

    async findById(id: string | number): Promise<IEntity | null> {
        return this.find({ id });
    }

    async updateById(id: string | number, data: IEntityUpdate): Promise<number> {
        return this.update({ id }, data);
    }

    async deleteById(id: string | number): Promise<number> {
        return this.delete({ id });
    }

    async list(filters?: {}, orders?: string[], limit?: number, offset?: number): Promise<IEntity[]> {
        const listEntityDatabase = await this.repository.list(filters, orders, limit, offset);
        return listEntityDatabase.map(
            (entityDatabase) => this.normalizeEntityDatabaseToEntity(entityDatabase) as IEntity,
        );
    }

    async find<F = {}>(filters: F = {} as F): Promise<IEntity | null> {
        const entityDatabase = await this.repository.find(filters);
        return this.normalizeEntityDatabaseToEntity(entityDatabase);
    }

    async create(data: IEntityCreate): Promise<number> {
        return this.repository.create(this.normalizeEntityCreateToEntityDatabaseCreate(data));
    }

    async update(filters: {}, data: IEntityUpdate): Promise<number> {
        return this.repository.update(filters, this.normalizeEntityUpdateToEntityDatabaseUpdate(data));
    }

    async delete(filters: {}): Promise<number> {
        return this.repository.delete(filters);
    }

    protected normalizeEntityDatabaseToEntity<IEntityDatabase>(data: IEntityDatabase): IEntity | null {
        return snakeKeysToCamel(data) as IEntity;
    }

    protected normalizeEntityToEntityDatabase<IEntityDatabase>(data: IEntity): IEntityDatabase | null {
        return camelKeysToSnake(data) as IEntityDatabase;
    }

    protected normalizeEntityDatabaseCreateToEntityCreate<IEntityDatabaseCreate>(
        data: IEntityDatabaseCreate,
    ): IEntityCreate | null {
        return snakeKeysToCamel(data) as IEntityCreate;
    }

    protected normalizeEntityCreateToEntityDatabaseCreate<IEntityDatabaseCreate>(
        data: IEntityCreate,
    ): IEntityDatabaseCreate | null {
        return camelKeysToSnake(data) as IEntityDatabaseCreate;
    }

    protected normalizeEntityDatabaseUpdateToEntityUpdate<IEntityDatabaseUpdate>(
        data: IEntityDatabaseUpdate,
    ): IEntityUpdate | null {
        return snakeKeysToCamel(data) as IEntityUpdate;
    }

    protected normalizeEntityUpdateToEntityDatabaseUpdate<IEntityDatabaseUpdate>(
        data: IEntityUpdate,
    ): IEntityDatabaseUpdate | null {
        return camelKeysToSnake(data) as IEntityDatabaseUpdate;
    }
}
