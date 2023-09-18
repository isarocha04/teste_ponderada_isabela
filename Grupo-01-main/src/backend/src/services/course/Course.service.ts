import { ICourseEntity, ICourseEntityCreate, ICourseEntityUpdate } from '../../dto/entities/ICourse.entity.dto';
import Service from '../Service';

export default class CourseService extends Service<ICourseEntity, ICourseEntityCreate, ICourseEntityUpdate> {
    listWithKpis= async() => {
        return (await this.list()).map(course => {
            return {
                ...course,
                projectsKPIs: {
                    businessTypes: [{ name: 'Pública', amount: 4 }, { name: 'Privada', amount: 3 }, { name: 'ONG', amount: 1 }],
                    businessSectors: [{ name: 'Tecnologia', amount: 2 }, { name: 'Construção', amount: 1 }, { name: 'Banco', amount: 1 }, { name: 'RH', amount: 3 }, { name: 'Agro', amount: 1 }]
                }
            }
        })
    }
}
