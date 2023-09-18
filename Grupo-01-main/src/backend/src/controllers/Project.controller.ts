import { Request, Response } from 'express';
import IController from './IController';
import ProjectService from '../services/project/Project.service';

export default class ProjectController implements IController {
    private projectService: ProjectService;
    constructor(projectService: ProjectService) {
        this.projectService = projectService;
    }

    list = async (req: Request, res: Response) => {
        res.json(await this.projectService.list());
    };

    findById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.projectService.findById(req.params.id));
    };

    create = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.projectService.createAndFind(req.body));
    };

    updateById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.projectService.updateByIdAndFind(req.params.id, req.body));
    };

    deleteById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.projectService.deleteById(req.params.id));
    };
}
