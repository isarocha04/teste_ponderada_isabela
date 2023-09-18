import { AxiosService } from '../../AxiosService';
import ICourseService, { ICourseWithKPIsAndModules } from './ICourseService';

class CourseService extends AxiosService implements ICourseService {
  async list(): Promise<ICourseWithKPIsAndModules[]> {
    const response = await this.axios.get('courses');

    return (response.data as ICourseWithKPIsAndModules[]).map(course  => {
      switch(course.id) {
        case 1:
          course.tagColor = 'inteli-orange'
        break;
        case 2:
          course.tagColor = 'lightPurple'
        break;
        case 3:
          course.tagColor = 'purple'
        break;
        case 4:
          course.tagColor = 'red'
        break;
        case 5:
          course.tagColor = 'inteli-blue'
        break;
        default:
          course.tagColor = 'gray'
        break;
      }
      return course;
    });
  }
}

export default new CourseService();
