import {
    IPrototypeEntity,
    IPrototypeEntityCreate,
    IPrototypeEntityUpdate,
} from '../../dto/entities/IPrototype.entity.dto';
import Service from '../Service';

export default class PrototypeService extends Service<
    IPrototypeEntity,
    IPrototypeEntityCreate,
    IPrototypeEntityUpdate
> {}
