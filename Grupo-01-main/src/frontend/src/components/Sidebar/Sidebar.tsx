import ISidebar from './ISidebar';
import ISidebarItem from './SidebarItem/ISidebarItem';
import SidebarItem from './SidebarItem/SidebarItem';
import inteliLogo from '/imagens/inteliLogoClara.png';
import { useLocation } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineBusinessCenter } from 'react-icons/md';

import { v4 as uuidv4 } from 'uuid';

export default function Sidebar(props: ISidebar) {
  const location = useLocation();
  const itens: ISidebarItem[] = props.itens
    ? props.itens
    : [
        {
          text: 'Home',
          link: '/',
          icon: <AiOutlineHome />,
        },
        {
          text: 'Iniciativas',
          link: '/initiatives',
          icon: <MdOutlineBusinessCenter />,
        },
      ];

  for (let i = 1; i < itens.length; i++) {
    if (location.pathname.includes(itens[i].link)) {
      itens[i].active = true;
    }
  }

  if (!itens.find((item) => item.active)) {
    itens[0].active = true;
  }

  return (
    <nav
      className={
        props.className ||
        'w-2/12 h-screen border border-black items-center bg-purple text-white rounded-r-sm font-inteli font-semibold flex flex-col gap-4'
      }
    >
      <img className={'my-5 w-24'} src={inteliLogo} />
      <ul
        className='mt-6 flex flex-col gap-6 text-md w-full px-4 overflow-auto'
        key={uuidv4()}
      >
        {itens.map((item) => (
          <SidebarItem {...item} key={uuidv4()} />
        ))}
      </ul>
    </nav>
  );
}
