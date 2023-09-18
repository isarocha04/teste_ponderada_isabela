import { Request, Response } from 'express';
import IController from './IController';
import UserService from '../services/user/User.service';

export default class UserController implements IController {
    private userService: UserService;
    constructor(userService: UserService) {
        this.userService = userService;
    }

    list = async (req: Request, res: Response) => {
        res.json(await this.userService.list());
    };

    findById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.userService.findById(req.params.id));
    };

    create = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.userService.createAndFind(req.body));
    };

    updateById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.userService.updateByIdAndFind(req.params.id, req.body));
    };

    deleteById = async (req: Request<{ id: string }>, res: Response) => {
        res.json(await this.userService.deleteById(req.params.id));
    };
}
