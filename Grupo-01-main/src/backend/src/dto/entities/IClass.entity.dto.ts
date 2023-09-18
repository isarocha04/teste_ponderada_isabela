export interface IClassEntity {
    id: number;
    name: string;
    status: string;
    courseId: number;
    studentQuantity: number | null;
    currentModuleId: number | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface IClassEntityCreate {
    name: string;
    status: string;
    courseId: number;
    studentQuantity?: number | null;
    currentModuleId?: number | null;
}

export interface IClassEntityUpdate {
    name?: string;
    status?: string;
    courseId?: number;
    studentQuantity?: number | null;
    currentModuleId?: number | null;
}
