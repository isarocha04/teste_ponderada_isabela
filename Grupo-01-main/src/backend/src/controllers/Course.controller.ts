import { Request, Response } from 'express';
import CourseService from '../services/course/Course.service';
import IController from './IController';
import ModuleService from '../services/module/Module.service';

export default class CourseController implements IController {
    private courseService: CourseService;
    private moduleService: ModuleService;

    constructor(courseService: CourseService, moduleService: ModuleService) {
        this.courseService = courseService;
        this.moduleService = moduleService;
    }

    list = async (req: Request, res: Response) => {
        const courses = await this.courseService.listWithKpis();
        const modules = await this.moduleService.list();

        res.json(
            courses.map((course) => {
                return {
                    ...course,
                    modules: modules.filter((module) => module.courseId == course.id),
                };
            }),
        );
    };

    findById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.courseService.findById(req.params.id));
    };

    create = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.courseService.createAndFind(req.body));
    };

    updateById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.courseService.updateByIdAndFind(req.params.id, req.body));
    };

    deleteById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.courseService.deleteById(req.params.id));
    };
}
