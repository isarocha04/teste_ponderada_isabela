import IniciativaForm from '../../components/IniciativaForm/IniciativaForm';
import InputLargeBox from '../../components/IniciativaForm/Inputs/InputLargeBox/InputLargeBox';
import Buttons from '../../components/IniciativaForm/Buttons/Buttons';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { IInitiative } from '../../services/OMP/Initiative/IInitiativeService';
import InitiativeService from '../../services/OMP/Initiative/InitiativeService';
import { uuidv4 } from '../../helpers/uuidv4';
import InputSimples from '../../components/IniciativaForm/Inputs/InputSimples/InputSimples';
import Dropdown from '../../components/Inputs/Dropdown/Dropdown';
import CompanyService from '../../services/OMP/Company/CompanyService';
import CourseService from '../../services/OMP/Course/CourseService';

export default function InitiativeEdition() {
  const [isLoadingInitiative, setIsLoadingInitiative] = useState<boolean>(false);
  const [initiative, setInitiative] = useState<IInitiative | null>(null);
  const [coursesWithModules, setCoursesWithModules] = useState<any[]>([]);
  const [companies, setCompanies] = useState<any[]>([]);

  const {id} = useParams();

  const navigate = useNavigate();

  function handleClick() {
    navigate('/initiatives');
  }

  async function handleEdit() {
    if(initiative) {
      await InitiativeService.edit(id as string, {
        name: initiative.name,
        status: initiative.status,
        description: initiative.description,
        observation: initiative.observation,
        companyId: initiative.company.id,
        moduleId: initiative.module.id
      });
    }

    navigate('/initiatives');
  }

  useEffect(() => {
    (async () => {
      try {
        setIsLoadingInitiative(true);
        const returnedInitiative = await InitiativeService.getById(id as string);
        setInitiative(returnedInitiative);
        setCompanies(await CompanyService.list());
        setCoursesWithModules(await CourseService.list());
        setIsLoadingInitiative(false);

        if(!returnedInitiative) {
          navigate('/initiatives');
        }
      } catch (error) {
        navigate('/initiatives');
      }
    })()
  }, [id])

  const modulesOptions = coursesWithModules.map(courseWithModule => {
    return (courseWithModule?.modules as any[] || []).map(module => {
      return {
        text: `${module?.name} - ${courseWithModule?.name}`,
        value: module?.id
      }
    })
  })
  
  let optionsModules = [] as any[];

  modulesOptions.map(optionArray => {
    optionsModules = optionsModules.concat(optionArray);
  })

  return (
    <div className='bg-white divide-y divide-gray pb-10'>
      {initiative && !isLoadingInitiative? <>
      <div>
        <IniciativaForm>
          <div>
            <InputSimples label='Título' type='text' onChange={(value: string) => setInitiative({...initiative, name: value})} idInput={uuidv4()} value={initiative.name} />
            <div className='mx-4 py-4'>
              Empresa:
              <Dropdown
                  options={companies.map(company => {
                    return {
                      text: company?.name,
                      value: company?.id
                    }
                  })}
                  value={String(initiative?.company?.id)}
                  onChange={(value: number) => {setInitiative({...initiative, company: {...initiative.company, id: value}})}}
                />
            </div>
            <div className='mx-4 py-4'>
              Módulo:
              <Dropdown
                  options={optionsModules}
                  value={String(initiative?.module?.id)}
                  onChange={(value: number) => {setInitiative({...initiative, module: {...initiative.module, id: value}})}}
                />
            </div>
          </div>
          
          <div>
            <InputLargeBox idInput={uuidv4()} rows={3} label='Observações' value={initiative.observation} onChange={(value: string) => setInitiative({...initiative, observation: value})}/>
            <InputLargeBox idInput={uuidv4()} rows={3} label='Proposta' value={initiative.description} onChange={(value: string) => setInitiative({...initiative, description: value})}/>
          </div>

          <Buttons label1='Recusar' label2='Aprovar' handleClick={handleClick} handleEdit={handleEdit} />
        </IniciativaForm>
      </div>
      </>: null}
      
    </div>
  );
}
