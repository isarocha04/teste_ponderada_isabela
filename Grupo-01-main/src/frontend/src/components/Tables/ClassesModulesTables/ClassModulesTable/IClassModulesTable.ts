export default interface IClassesModulesTables {
  course: ICourseWithModules;
  classes: IClassWithModulesAndProjects[];
}

export interface ICourse {
  id: number;
  name: string;
}

export interface ICourseWithModules extends ICourse {
  modules: IModule[];
  tagColor: string;
}

export interface IModule {
  id: number;
  name: string;
  order: number;
}

export interface IClassWithModulesAndProjects {
  id: number;
  name: string;
  currentModuleId: number;
  course: ICourse;
  modules: IClassModuleWithProject[];
}

export interface IClassModuleWithProject {
  id: number;
  order: number;
  name: string;
  project?: IClassModuleProject;
  initiatives?: {id: number; name: string}[];
}

export interface IClassModuleProject {
  id: number;
  name: string;
  status: string;
  business: IClassModuleProjectBusiness;
}

export interface IClassModuleProjectBusiness {
  id: number;
  name: string;
  type: string;
  sector: string;
}
