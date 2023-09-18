import { Request, Response } from 'express';
import IController from './IController';
import InitiativeService from '../services/initiative/Initiative.service';

export default class InitiativeController implements IController {
    private initiativeService: InitiativeService;
    constructor(initiativeService: InitiativeService) {
        this.initiativeService = initiativeService;
    }

    list = async (req: Request, res: Response) => {
        const counts = await this.initiativeService.getCounts();
        res.json({
            ...counts,
            data: await this.initiativeService.listWithModuleAndCompany()
        })
    };

    findById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.initiativeService.findById(req.params.id));
    };

    create = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.initiativeService.createAndFind(req.body));
    };

    updateById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.initiativeService.updateByIdAndFind(req.params.id, req.body));
    };

    deleteById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.initiativeService.deleteById(req.params.id));
    };
}
