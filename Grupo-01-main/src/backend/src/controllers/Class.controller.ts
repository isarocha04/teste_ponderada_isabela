import { Request, Response } from 'express';
import IController from './IController';
import ClassService from '../services/class/Class.service';
import ModuleService from '../services/module/Module.service';
import InitiativeService from '../services/initiative/Initiative.service';
import ProjectService from '../services/project/Project.service';

export default class ClassController implements IController {
    private classService: ClassService;
    private moduleService: ModuleService;
    private initiativeService: InitiativeService;
    private projectService: ProjectService;

    constructor(
        classService: ClassService,
        moduleService: ModuleService,
        initiativeService: InitiativeService,
        projectService: ProjectService,
    ) {
        this.classService = classService;
        this.moduleService = moduleService;
        this.initiativeService = initiativeService;
        this.projectService = projectService;
    }

    list = async (req: Request, res: Response) => {
        const classes = await this.classService.listWithCourse();
        const modules = await this.moduleService.list();
        const initiatives = await this.initiativeService.list();
        const projects = await this.projectService.listWithCompany();

        res.json(
            classes.map((inteliClass) => {
                return {
                    ...inteliClass,
                    modules: modules
                        .filter((module) => module.courseId == inteliClass.courseId)
                        .map((module) => {
                            return {
                                ...module,
                                project: projects.find(
                                    (project) => project.classId == inteliClass.id && project.moduleId == module.id,
                                ),
                                initiatives: initiatives.filter((initiative) => initiative.moduleId == module.id),
                            };
                        }),
                };
            }),
        );
    };

    findById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.classService.findById(req.params.id));
    };

    create = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.classService.createAndFind(req.body));
    };

    updateById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.classService.updateByIdAndFind(req.params.id, req.body));
    };

    deleteById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.classService.deleteById(req.params.id));
    };
}
