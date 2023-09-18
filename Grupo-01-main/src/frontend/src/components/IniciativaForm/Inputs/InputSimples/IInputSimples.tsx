
import IComponent from "../../../Component/IComponent";

export default interface IInputSimples extends IComponent {
    onChange?: CallableFunction;
    isDisabled?: boolean;
    idInput: string;
    value?: string;
    label: string;
    type: string;
}