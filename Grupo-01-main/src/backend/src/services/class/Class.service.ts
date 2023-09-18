import { IClassEntity, IClassEntityCreate, IClassEntityUpdate } from '../../dto/entities/IClass.entity.dto';
import ClassRepository from '../../repositories/class/Class.repository';
import Service from '../Service';

export default class ClassService extends Service<IClassEntity, IClassEntityCreate, IClassEntityUpdate, ClassRepository> {
    listWithCourse = async () => {
        return (await this.repository.listWithCourse()).map(InteliClass => {
            const normalizedClass = this.normalizeEntityDatabaseToEntity(InteliClass) as IClassEntity & {courseName: string}

            return {
                ...normalizedClass,
                course: {
                    id: normalizedClass?.courseId,
                    name: normalizedClass?.courseName
                }
            }
        });
    }
}
