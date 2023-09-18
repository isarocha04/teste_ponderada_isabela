import { Request, Response } from 'express';
import IController from './IController';
import TeacherService from '../services/teacher/Teacher.service';

export default class TeacherController implements IController {
    private teacherService: TeacherService;
    constructor(teacherService: TeacherService) {
        this.teacherService = teacherService;
    }

    list = async (req: Request, res: Response) => {
        res.json(await this.teacherService.list());
    };

    findById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.teacherService.findById(req.params.id));
    };

    create = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.teacherService.createAndFind(req.body));
    };

    updateById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.teacherService.updateByIdAndFind(req.params.id, req.body));
    };

    deleteById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.teacherService.deleteById(req.params.id));
    };
}
