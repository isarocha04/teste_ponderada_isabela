
import IComponent from "../../Component/IComponent";

export default interface IButtons extends IComponent {
    label1: string;
    label2: string;
    handleClick?: CallableFunction
    handleEdit?: CallableFunction
}