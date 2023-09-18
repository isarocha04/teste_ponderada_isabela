export default interface IClass {
  listClasses(): Promise<ClassWithCorseAndModulesProjectsBusiness[]>;
}

export interface ClassWithCorseAndModulesProjectsBusiness {
  id: number;
  name: string;
  currentModuleId: number;
  course: {
    id: number;
    name: string;
  };
  modules: {
    id: number;
    name: string;
    order: number;
    initiatives?: {id: number, name: string}[],
    project?: {
      id: number;
      name: string;
      status: string;
      business: {
        id: number;
        name: string;
        type: string;
        sector: string;
      };
    };
  }[];
}
