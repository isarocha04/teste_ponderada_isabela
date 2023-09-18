import IComponent from "../Component/IComponent";

export default interface IKpis extends IComponent {
    linkImg: string;
    mensagem: string;
    quantidade: number;
    quantidadeTotal: number
}