
import IComponent from "../../Component/IComponent";

export default interface IModulo extends IComponent {
    turma: string;
    nomeProjeto: string;
    imgLink?: string;
}