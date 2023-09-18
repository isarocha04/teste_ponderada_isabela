import { Request, Response } from 'express';
import IController from './IController';
import CompanyService from '../services/company/Company.service';

export default class CompanyController implements IController {
    private classService: CompanyService;
    constructor(classService: CompanyService) {
        this.classService = classService;
    }

    list = async (req: Request, res: Response) => {
        res.json(await this.classService.list());
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
