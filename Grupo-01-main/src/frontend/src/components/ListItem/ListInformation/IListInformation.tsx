import IComponent from "../../Component/IComponent";

export default interface IListItem extends IComponent {
    nomeEmpresa: string;
    emailEmpresa: string;
    logoEmpresa: string;
}