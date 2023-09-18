import { Request, Response } from 'express';
import IController from './IController';
import PrototypeService from '../services/prototype/Prototype.service';

export default class PrototypeController implements IController {
    private prototypeService: PrototypeService;
    constructor(prototypeService: PrototypeService) {
        this.prototypeService = prototypeService;
    }

    list = async (req: Request, res: Response) => {
        res.json(await this.prototypeService.list());
    };

    findById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.prototypeService.findById(req.params.id));
    };

    create = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.prototypeService.createAndFind(req.body));
    };

    updateById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.prototypeService.updateByIdAndFind(req.params.id, req.body));
    };

    deleteById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.prototypeService.deleteById(req.params.id));
    };
}
