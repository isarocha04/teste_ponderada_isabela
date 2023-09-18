import { useState, useEffect } from 'react';
import TreeMap from '../../components/Charts/TreeMap/TreeMap';
import Section from '../../components/Section/Section';
import Dropdown from '../../components/Inputs/Dropdown/Dropdown';
import ClassesModulesTables from '../../components/Tables/ClassesModulesTables/ClassesModulesTables';
import {
  IClassWithModulesAndProjects,
} from '../../components/Tables/ClassesModulesTables/ClassModulesTable/IClassModulesTable';
import HomeService from '../../services/OMP/Home/HomeService';
import { ICourseWithKPIsAndModules } from '../../services/OMP/Course/ICourseService';
import CourseService from '../../services/OMP/Course/CourseService';
import { ITreeMapData } from '../../components/Charts/TreeMap/ITreeMap';

export default function Home() {
  const [isLoadingCourse, setIsLoadingCourse] = useState<boolean>(false);
  const [coursesInfo, setCoursesInfo] = useState<ICourseWithKPIsAndModules[]>(
    []
  );

  const [isLoadingClasses, setIsLoadingClasses] = useState<boolean>(false);
  const [classesInfo, setClassesInfo] = useState<
    IClassWithModulesAndProjects[]
  >([]);

  const [projectField, setProjectField] = useState<'type' | 'sector'>('type');

  useEffect(() => {
    (async () => {
      setIsLoadingClasses(true);
      try {
        const classes = await HomeService.listClasses();
        setClassesInfo(classes);
      } catch (error) {

      }

      setIsLoadingClasses(false);
    })();

    (async () => {
      setIsLoadingCourse(true);
      try {
        setCoursesInfo(await CourseService.list());
      } catch (error) {
      }
      setIsLoadingCourse(false);
    })();
  }, []);

  function onProjectFieldChange(value: 'type' | 'sector') {
    setProjectField(value);
  }

  function getCoursesWithKPIsToTreeMapData(
    courses: ICourseWithKPIsAndModules[]
  ): ITreeMapData[] {
    return courses.map((course) => {
      return {
        name: course.name,
        tagColor: course.tagColor,
        children:
          projectField == 'sector'
            ? course.projectsKPIs.businessSectors.map((sec) => {
                return {
                  ...sec,
                  size: sec.amount,
                };
              })
            : course.projectsKPIs.businessTypes.map((type) => {
                return {
                  ...type,
                  size: type.amount,
                };
              }),
      };
    });
  }

  return (
    <>
      <Section flexDirection='col'>
        <div className='w-100 flex'>
          <h2 className='font-semibold text-3xl mb-5 w-4/6'>
            PROJETOS POR TURMA
          </h2>
        </div>
        <div className='overflow-x-auto w-full'>
          {isLoadingClasses || isLoadingCourse ? null : (
            <ClassesModulesTables classes={classesInfo} courses={coursesInfo} />
          )}
        </div>
      </Section>
      <Section flexDirection='col'>
        <div className='w-full flex'>
          <h2 className='font-semibold text-3xl mb-5 w-4/6'>
            CARACTERÍSTICAS DE PROJETO POR CURSO
          </h2>
          <div className='w-3/12'>
            <Dropdown
              options={[
                { text: 'Tipo', value: 'type' },
                { text: 'Setor', value: 'sector' },
              ]}
              value={projectField}
              onChange={onProjectFieldChange}
            />
          </div>
        </div>
        {isLoadingCourse ? null : (
          <TreeMap
            data={getCoursesWithKPIsToTreeMapData(coursesInfo)}
            singularItemName='Projeto'
            pluralItemName='Projetos'
          />
        )}
      </Section>
    </>
  );
}
