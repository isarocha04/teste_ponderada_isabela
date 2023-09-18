export interface IProjectEntity {
    id: number;
    name: string;
    description: string | null;
    status: string;
    companyId: number;
    moduleId: number;
    classId: number;
    tapiFileId: number | null;
    agreementFileId: number | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface IProjectEntityCreate {
    name: string;
    description?: string | null;
    status: string;
    companyId: number;
    moduleId: number;
    classId: number;
    tapiFileId?: number | null;
    agreementFileId?: number | null;
}

export interface IProjectEntityUpdate {
    name?: string;
    description?: string | null;
    status?: string;
    companyId?: number;
    moduleId?: number;
    classId?: number;
    tapiFileId?: number | null;
    agreementFileId?: number | null;
}
