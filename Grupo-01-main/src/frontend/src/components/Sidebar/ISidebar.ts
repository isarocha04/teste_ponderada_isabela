import IComponent from '../Component/IComponent';
import ISidebarItem from './SidebarItem/ISidebarItem';

export default interface ISidebar extends IComponent {
  itens?: ISidebarItem[];
}
