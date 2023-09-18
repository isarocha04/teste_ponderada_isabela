import {
    IInitiativeEntity,
    IInitiativeEntityCreate,
    IInitiativeEntityUpdate,
} from '../../dto/entities/IInitiative.entity.dto';
import InitiativeRepository from '../../repositories/initiative/Initiative.repository';
import snakeKeysToCamel from '../../utils/snakeKeysToCamel.util';
import Service from '../Service';

export default class InitiativeService extends Service<
    IInitiativeEntity,
    IInitiativeEntityCreate,
    IInitiativeEntityUpdate,
    InitiativeRepository
> {

    listWithModuleAndCompany = async () => {
        const initiativesWithModuleAndCompany = await this.repository.listWithModuleAndCompany();
        return initiativesWithModuleAndCompany.map(initiative => {
            const normalized = snakeKeysToCamel(initiative);

            normalized.module = {
                id: normalized.moduleId,
                name: normalized.moduleName,
                course: {
                    id: normalized.courseId,
                    name: normalized.courseName,        
                }
            }

            normalized.company = {
                id: normalized.companyId,
                name: normalized.companyName
            }


            return normalized;
        })
    }

    getCounts = async (
        filters?: any,
    ): Promise<{ qtd: number; qt_pending: number; qt_accepted: number; qt_denied: number }> => {
        return await this.repository.getCounts(filters);
    };
}
