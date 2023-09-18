import { Request, Response } from 'express';
import IController from './IController';
import FileService from '../services/file/File.service';

export default class FileController implements IController {
    private fileService: FileService;
    constructor(fileService: FileService) {
        this.fileService = fileService;
    }

    list = async (req: Request, res: Response) => {
        res.json(await this.fileService.list());
    };

    findById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.fileService.findById(req.params.id));
    };

    create = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.fileService.createAndFind(req.body));
    };

    updateById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.fileService.updateByIdAndFind(req.params.id, req.body));
    };

    deleteById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.fileService.deleteById(req.params.id));
    };
}
