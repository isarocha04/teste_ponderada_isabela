import { IModuleEntity, IModuleEntityCreate, IModuleEntityUpdate } from '../../dto/entities/IModule.entity.dto';
import Service from '../Service';

export default class ModuleService extends Service<IModuleEntity, IModuleEntityCreate, IModuleEntityUpdate> {}
