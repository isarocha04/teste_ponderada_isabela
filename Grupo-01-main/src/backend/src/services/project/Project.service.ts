import { IProjectEntity, IProjectEntityCreate, IProjectEntityUpdate } from '../../dto/entities/IProject.entity.dto';
import ProjectRepository from '../../repositories/project/Project.repository';
import Service from '../Service';

export default class ProjectService extends Service<IProjectEntity, IProjectEntityCreate, IProjectEntityUpdate, ProjectRepository> {
    listWithCompany = async () => {
        return (await this.repository.listWithCompany()).map(project => {
            const normalizedProject = this.normalizeEntityDatabaseToEntity(project) as IProjectEntity & {companyName: string}

            return {
                ...normalizedProject,
                business: {
                    id: normalizedProject?.companyId,
                    name: normalizedProject?.companyName
                }
            }
        });
    }
}
