import { AxiosService } from '../../AxiosService';

class CompanyService extends AxiosService {
  async list(): Promise<any> {
    const response = await this.axios.get('companies');

    return response.data;
  }

  async getById(id: string | number): Promise<any> {
    const response = await this.axios.get(`companies/${id}`);
    return response.data;
  }

  async create(data: any): Promise<any> {
    const response = await this.axios.post(`companies`, data);
    return response.data;
  }

  async delete(id: number | string ): Promise<any> {
    const response = await this.axios.delete(`companies/${id}`);
    return response.data;
  }

  async edit(id: number | string, data: any): Promise<any> {
    const response = await this.axios.patch(`companies/${id}`, data);
    return response.data;
  }
}

export default new CompanyService();
