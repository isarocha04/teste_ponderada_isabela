export default interface ICourseService {
  list(): Promise<ICourseWithKPIsAndModules[]>;
}

export interface ICourseWithKPIsAndModules {
  id: number;
  name: string;
  tagColor: string;
  projectsKPIs: {
    businessTypes: { name: string; amount: number }[];
    businessSectors: { name: string; amount: number }[];
  };
  modules: {
    id: number;
    name: string;
    order: number;
  }[];
}
