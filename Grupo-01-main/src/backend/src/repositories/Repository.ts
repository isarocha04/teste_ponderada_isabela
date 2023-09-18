import IMysqlConnection from '../connections/mysql/IMysql.connection';

export default abstract class Repository<IEntityDatabase, IEntityDatabaseCreate, IEntityDatabaseUpdate> {
    tableName: string;
    databaseConnection: IMysqlConnection;

    constructor(tableName: string, databaseConnection: IMysqlConnection) {
        this.tableName = tableName;
        this.databaseConnection = databaseConnection;
    }

    async findById(id: string | number): Promise<IEntityDatabase | null> {
        return this.find({ id });
    }

    async updateById(id: string | number, data: IEntityDatabaseUpdate): Promise<number> {
        return this.update({ id }, data);
    }

    async deleteById(id: string | number): Promise<number> {
        return this.delete({ id });
    }

    async list<F = {}>(filters?: F, orders?: string[], limit?: number, offset?: number): Promise<IEntityDatabase[]> {
        return this.databaseConnection.doSelect<IEntityDatabase>(`
            SELECT *
            FROM ${this.tableName}
            ${filters ? this.normalizeFilters(filters) : ''}
            ${orders ? `ORDER BY ${orders.join(', ')}` : ''}
            ${limit ? `LIMIT ${limit}` : ''} ${offset ? `OFFSET ${offset}` : ''}
        `);
    }

    async find<F = {}>(filters: F = {} as F): Promise<IEntityDatabase | null> {
        return this.databaseConnection.doSelectOne<IEntityDatabase>(`
            SELECT *
            FROM ${this.tableName}
            WHERE ${this.normalizeFilters(filters)}
            LIMIT 1
        `);
    }

    async create(data: IEntityDatabaseCreate): Promise<number> {
        return this.databaseConnection.doCreate(`
            INSERT INTO ${this.tableName}
            (${Object.keys(data as {})
                .map((value) => this.databaseConnection.escapeId(value))
                .join(', ')})
            VALUES
            (${Object.values(data as {})
                .map((value) => this.databaseConnection.escape(value))
                .join(', ')})
        `);
    }

    async update<F = {}>(filters: F, data: IEntityDatabaseUpdate): Promise<number> {
        return this.databaseConnection.doCreate(`
            UPDATE ${this.tableName}
            SET ${Object.entries(data as {})
                .map(
                    (entrie) =>
                        `${this.databaseConnection.escapeId(entrie[0])} = ${this.databaseConnection.escape(entrie[1])}`,
                )
                .join(', ')}
            WHERE
                ${this.normalizeFilters(filters)}
        `);
    }

    async delete<F = {}>(filters: F): Promise<number> {
        return this.databaseConnection.doDelete(`
            DELETE FROM ${this.tableName}
            WHERE ${this.normalizeFilters(filters)}
        `);
    }

    protected normalizeFilters(filters: any): string {
        return Object.entries(filters)
            .map(
                (entrie) =>
                    `${
                        entrie[0][0] == '$'
                            ? this.databaseConnection.escapeId(entrie[0].substring(1))
                            : this.databaseConnection.escapeId(entrie[0])
                    } = ${entrie[0][0] == '$' ? entrie[1] : this.databaseConnection.escape(entrie[1])}`,
            )
            .join(' AND ');
    }
}
