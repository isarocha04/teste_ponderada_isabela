import { uuidv4 } from '../../../../helpers/uuidv4';
import IClassModulesTable from './IClassModulesTable';
export default function ClassModulesTable(props: IClassModulesTable) {
  return (
    <table className={`table-auto w-full my-5`}>
      <thead className='bg-purple text-white'>
        <tr key={uuidv4()} className={`bg-${props.course.tagColor}`}>
          <th colSpan={props.course.modules.length + 1} className=''>
            {props.course.name.toUpperCase()}
          </th>
        </tr>
        <tr key={uuidv4()}>
          <th className='font-semibold w-1/6'>TURMA</th>
          {props.course.modules
            .sort((a, b) => a.order - b.order)
            .map((module) => (
              <th key={uuidv4()} className='font-normal px-2 w-1/12'>
                <span className='block text-sm font-semibold'>
                  MÓDULO {module.order}
                </span>
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {props.classes.map((classe) => (
          <tr key={uuidv4()} className='overflow-x-auto border-b-2 border-purple'>
            <td className='text-sm'>{classe.name}</td>
            {props.course.modules
              .sort((a, b) => a.order - b.order)
              .map((module) => {
                const classModule = classe.modules.find(
                  (classModule) => classModule.id == module.id
                );

                const project = classModule ? classModule.project : null;
                const business = project ? project.business : null;

                let projectStatusTagColor = 'bg-gray';

                switch (project?.status) {
                  case 'COMPLETE':
                    projectStatusTagColor = 'bg-lightPurple';
                    break;
                  case 'PENDING':
                    projectStatusTagColor = 'bg-yellow';
                    break;
                  case 'WAITING':
                    projectStatusTagColor = 'bg-lightGreen';
                    break;
                  case 'CURRENT':
                    projectStatusTagColor = 'bg-blackGreen';
                    break;
                  case 'CANCELED':
                    projectStatusTagColor = 'bg-red';
                    break;
                }

                return (
                  <td key={uuidv4()} className={`text-center py-1`}>
                    {project ? (
                      <span
                        className={`flex flex-col ${projectStatusTagColor} py-1 text-white mx-1`}
                      >
                        <span className='text-xs'>{project?.name}</span>
                        <span className='text-xs font-semibold'>
                          {business?.name}
                        </span>
                      </span>
                    ) : (classModule?.initiatives && classModule.initiatives.length ? (
                      <span className='flex flex-col bg-gray py-1 mx-1 text-white text-xs'>
                        <span className='font-semibold text-sm'>
                          {classModule.initiatives.length} 
                        </span>
                        <span>
                          {classModule.initiatives.length == 1 ? 'Iniciativa' : 'Iniciativas'}
                        </span>
                      </span>
                    ): '-')}
                  </td>
                );
              })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
