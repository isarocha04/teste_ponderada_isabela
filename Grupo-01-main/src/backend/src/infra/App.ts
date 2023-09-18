import express, { Express } from 'express';
import cors from 'cors';
import IEnvironmentConfig from './config/IEnvironment.config';
import IMysqlConnection from '../connections/mysql/IMysql.connection';
import loggerMiddleware from '../middlewares/logger.middleware';
import MysqlConnection from '../connections/mysql/Mysql.connection';
import AbstractRouter from '../routers/Router';
import CourseRouter from '../routers/Course.router';
import CompanyRouter from '../routers/Company,router';
import CompetenceRouter from '../routers/Competence.router';
import FileRouter from '../routers/File.router';
import InitiativeRouter from '../routers/Initiative.router';
import ModuleRouter from '../routers/Module.router';
import ProjectRouter from '../routers/Project.router';
import PrototypeRouter from '../routers/Prototype.router';
import TeacherRouter from '../routers/Teacher.router';
import UserRouter from '../routers/User.router';
import ClassRouter from '../routers/Class.router';

export default class App {
    private environmentConfig: IEnvironmentConfig;
    private databaseConnection?: IMysqlConnection;
    private express: Express;
    private port: number;

    constructor(environmentConfig: IEnvironmentConfig) {
        this.environmentConfig = environmentConfig;
        this.express = express();
        this.port = this.environmentConfig.getVars().port;
    }

    configure() {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(loggerMiddleware);
    }

    setRouters() {
        this.setRouterAndUse(ClassRouter, '/classes');
        this.setRouterAndUse(CompanyRouter, '/companies');
        this.setRouterAndUse(CompetenceRouter, '/competences');
        this.setRouterAndUse(CourseRouter, '/courses');
        this.setRouterAndUse(FileRouter, '/files');
        this.setRouterAndUse(InitiativeRouter, '/initiatives');
        this.setRouterAndUse(ModuleRouter, '/modules');
        this.setRouterAndUse(ProjectRouter, '/projects');
        this.setRouterAndUse(PrototypeRouter, '/prototypes');
        this.setRouterAndUse(TeacherRouter, '/teachers');
        this.setRouterAndUse(UserRouter, '/users');
    }

    private setRouterAndUse(Router: new (...args: any[]) => AbstractRouter, prefix?: string) {
        const router = new Router(this.databaseConnection);
        this.express.use(prefix || '', router.getRouter());
    }

    setConnections() {
        this.databaseConnection = new MysqlConnection(this.environmentConfig.getVars().database);
        this.databaseConnection.connect();
    }

    start() {
        this.setConnections();
        this.configure();
        this.setRouters();

        this.express.listen(this.port, () => {
            console.log(`Listening ${this.port} port`);
        });
    }
}
