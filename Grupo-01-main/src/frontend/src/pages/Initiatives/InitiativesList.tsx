import Kpis from '../../components/Kpis/Kpis';
import aprovadoSVG from '/imagens/svg/aprovado.svg';
import duvidaSVG from '/imagens/svg/duvida.svg';
import reprovadoSVG from '/imagens/svg/recusado.svg';
import lupa from '/imagens/svg/lupa.svg';
import iconeCriar from '/imagens/svg/iconeCriar.svg';
import MenuOptions from '../../components/MenuOptions/MenuOptions';
import MenuItem from '../../components/MenuOptions/MenuItem/MenuItem';
import ListItem from '../../components/ListItem/ListItem';
import ListInformation from '../../components/ListItem/ListInformation/ListInformation';
import ListClassifier from '../../components/ListItem/ListClassifier/ListClassifier';
import ListStatus from '../../components/ListItem/ListStatus/ListStatus';
import ListDecision from '../../components/ListItem/ListDecision/ListDecision';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import InitiativeService from '../../services/OMP/Initiative/InitiativeService';
import { IInitiative } from '../../services/OMP/Initiative/IInitiativeService';

export default function InitiativesList() {
  const [isLoadingInitiatives, setIsLoadingInitiatives] = useState<boolean>(false)
  const [initiativeCounts, setInitiativeCounts] = useState<{qt: number, qtPending: number, qtAccepted: number, qtDenied: number}>({qt: 0, qtAccepted: 0, qtDenied: 0, qtPending: 0})
  const [initiatives, setInitiatives] = useState<IInitiative[]>([])

  useEffect(() => {
    (async () => {
      setIsLoadingInitiatives(true);
      const initiatives = await InitiativeService.list();
      setInitiativeCounts({qt: initiatives.qt, qtPending: initiatives.qt_pending, qtAccepted: initiatives.qt_accepted, qtDenied: initiatives.qt_denied})
      setInitiatives(initiatives.data);
      setIsLoadingInitiatives(false);
      
    })()
  }, [])

  async function handleDelete(id: number) {
    try {
      await InitiativeService.delete(id);
      setInitiatives(initiatives.filter((initiative) => initiative.id != id));
    } catch (error) {

    }
  }

  return (
    <div className='bg-white'>
      <div className='grid grid-cols-12 mx-4 mt-4'>
        <div className='col-span-4 text-4xl flex items-center justify-center font-semibold text-purple'>
          INICIATIVAS
        </div>
        <div className='col-span-8 flex flex-row justify-end gap-8'>
          <div className=''>
            <Kpis
              quantidade={initiativeCounts.qtAccepted}
              quantidadeTotal={initiativeCounts.qt}
              mensagem='Iniciativas Aprovadas'
              linkImg={aprovadoSVG}
            />
          </div>
          <div>
            <Kpis
              quantidade={initiativeCounts.qtDenied}
              quantidadeTotal={initiativeCounts.qt}
              mensagem='Iniciativas Reprovadas'
              linkImg={reprovadoSVG}
            />
          </div>
          <div>
            <Kpis
              quantidade={initiativeCounts.qtPending}
              quantidadeTotal={initiativeCounts.qt}
              mensagem='Iniciativas em Análise'
              linkImg={duvidaSVG}
            />
          </div>
        </div>
      </div>

      {/* BARRA DE PESQUISA E BOTAO DE CRIAR NOVA INICIATIVA */}

      <div className='grid grid-cols-12 my-10 ml-5'>
        <div className='col-span-9'>
          <form action='' className='w-full max-w-md'>
            <div className='flex items-center relative'>
              <input
                className='w-full rounded-md pl-8 font-semibold text-sm py-1 shadow-md'
                type='text'
                placeholder='Buscar Iniciativa'
              />
              <img
                src={lupa}
                className='absolute pl-1 pointer-events-none'
                alt=''
              />
            </div>
          </form>
        </div>

        <Link to={'/initiatives/create'} className='col-start-11'>
          <button className='flex flex-row shadow-md bg-purple text-white place-content-around w-32 p-1 text-sm transition-all hover:px-2 hover:text-md'>
            <div className='font-bold'>Criar</div>
            <img className='' src={iconeCriar} alt='' />
          </button>
        </Link>
        {/* <div className='col-start-11 flex flex-row align-center shadow-md bg-purple text-white'>
          <div className='text-sm mx-1 my-1 font-bold'>Criar</div>
          <img className='mx-1 my-1' src={iconeCriar} alt='' />
        </div> */}
      </div>

      {/* LISTAGEM DE INICIATIVAS */}

      <div className='grid grid-cols-12 my-5'>
        <ul className=' col-span-12'>
          <li className='flex flex-row justify-between'>
            <MenuOptions className=''>
              <MenuItem filtro='Empresa' />
              <MenuItem filtro='Módulo' />
              <MenuItem filtro='Status' />
              <MenuItem filtro='Ações' />
            </MenuOptions>
          </li>
          <li className='flex-row justify-between space-y-6 mt-4 divide-y divide-white'></li>
          {isLoadingInitiatives ? null : initiatives.map((initiative) => {
            return <InitiativeItem {...initiative} onDelete={handleDelete} key={initiative.id}/>;
          })}
          
        </ul>
      </div>
    </div>
  );
}

interface IInitiativeItem {
  onDelete?: CallableFunction;
  status: string;
  id: number;
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
  };
}

function InitiativeItem(props: IInitiativeItem) {
  return (
    <ListItem>
      <ListInformation
        nomeEmpresa={props.company.name}
        emailEmpresa={`#${props.company.id}`}
        logoEmpresa={props.company.logoUrl || 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'}
      />
      <ListClassifier
        courseName={props.module.course.name}
        moduleName={props.module.name}
      />
      <ListStatus status={props.status} />
      <ListDecision id={props.id} onDelete={props.onDelete} />
    </ListItem>
  );
}
