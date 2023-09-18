import { AxiosService } from '../../AxiosService';
import IHomeService, {
  ClassWithCorseAndModulesProjectsBusiness,
} from './IHomeService';

class HomeService extends AxiosService implements IHomeService {
  async listClasses(): Promise<ClassWithCorseAndModulesProjectsBusiness[]> {
    const response = await this.axios.get('classes');
    return response.data;
  }
}

export default new HomeService();
