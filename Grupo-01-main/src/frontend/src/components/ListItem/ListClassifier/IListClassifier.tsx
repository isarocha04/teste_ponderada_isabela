import IComponent from '../../Component/IComponent';

export default interface IListClassifier extends IComponent {
  moduleName: string;
  courseName: string;
  // competences: {
  //   name: string;
  //   rate: number;
  // }[];
}
