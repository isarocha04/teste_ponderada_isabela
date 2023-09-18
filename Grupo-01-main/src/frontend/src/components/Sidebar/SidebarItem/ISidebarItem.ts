import IComponent from '../../Component/IComponent';

export default interface ISidebarItem extends IComponent {
  link: string;
  text: string;
  icon?: React.ReactElement;
  active?: boolean;
}
