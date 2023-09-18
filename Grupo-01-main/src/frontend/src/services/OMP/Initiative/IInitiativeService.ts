export default interface IInitiativeService {
  list(): IInitiative[];
  listByBusinessId(id: string | number): IInitiative[];
  getById(id: string | number): IInitiative;
  create(data: any): IInitiative;
}

export interface IInitiative {
  id: number;
  name: string;
    observation?: string;
    description?: string;
    status: string;
    company: {
      id: number;
      name: string;
      logoUrl?: string;
    };
    module: {
        id: number;
        name: string;
        course: {
          id: number;
          name: string;
        }
    }
    createdAt?: string;
    updatedAt?: string;
}