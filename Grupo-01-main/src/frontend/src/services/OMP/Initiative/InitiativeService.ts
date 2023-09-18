import { AxiosService } from '../../AxiosService';
import { IInitiative } from './IInitiativeService';

class InitiativeService extends AxiosService {
  async list(): Promise<{data: IInitiative[], qt: number,qt_pending: number, qt_accepted: number, qt_denied: number}> {
    const response = await this.axios.get('initiatives');

    console.log('retorno das iniciativas: ', response.data)
    return response.data;
  }

  async listByBusinessId(id: string | number): Promise<IInitiative[]> {
    const response = await this.axios.get(`initiatives/business/${id}`);
    return response.data;
  }

  async getById(id: string | number): Promise<IInitiative> {
    const response = await this.axios.get(`initiatives/${id}`);
    return response.data;
  }

  async create(data: any): Promise<IInitiative> {
    const response = await this.axios.post(`initiatives`, data);
    return response.data;
  }

  async delete(id: number | string ): Promise<any> {
    const response = await this.axios.delete(`initiatives/${id}`);
    return response.data;
  }

  async edit(id: number | string, data: any): Promise<IInitiative> {
    const response = await this.axios.patch(`initiatives/${id}`, data);
    return response.data;
  }
}

export default new InitiativeService();
