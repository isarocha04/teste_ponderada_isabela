import { Request, Response } from 'express';
import IController from './IController';
import CompetenceService from '../services/competence/Competence.service';

export default class CompetenceController implements IController {
    private competenceService: CompetenceService;
    constructor(competenceService: CompetenceService) {
        this.competenceService = competenceService;
    }

    list = async (req: Request, res: Response) => {
        res.json(await this.competenceService.list());
    };

    findById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.competenceService.findById(req.params.id));
    };

    create = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.competenceService.createAndFind(req.body));
    };

    updateById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.competenceService.updateByIdAndFind(req.params.id, req.body));
    };

    deleteById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.competenceService.deleteById(req.params.id));
    };
}
