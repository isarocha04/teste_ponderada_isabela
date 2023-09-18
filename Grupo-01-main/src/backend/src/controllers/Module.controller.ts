import { Request, Response } from 'express';
import IController from './IController';
import ModuleService from '../services/module/Module.service';

export default class ModuleController implements IController {
    private moduleService: ModuleService;
    constructor(moduleService: ModuleService) {
        this.moduleService = moduleService;
    }

    list = async (req: Request, res: Response) => {
        res.json(await this.moduleService.list());
    };

    findById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.moduleService.findById(req.params.id));
    };

    create = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.moduleService.createAndFind(req.body));
    };

    updateById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.moduleService.updateByIdAndFind(req.params.id, req.body));
    };

    deleteById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.moduleService.deleteById(req.params.id));
    };
}
