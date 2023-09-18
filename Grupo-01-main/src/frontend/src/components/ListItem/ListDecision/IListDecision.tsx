import IComponent from '../../Component/IComponent';

export default interface IListDecision extends IComponent {
  id: number;
  onDelete?: CallableFunction;
}
