import axios, { Axios } from 'axios';

export abstract class AxiosService {
  axios: Axios;

  constructor(baseUrl: string = 'http://localhost:3000') {
    this.axios = axios.create({
      baseURL: baseUrl,
    });
  }
}
