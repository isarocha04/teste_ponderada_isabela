
import IComponent from "../../../Component/IComponent";

export default interface IInputLargeBox extends IComponent {
    onChange?: CallableFunction;
    isDisabled?: boolean;
    idInput: string;
    rows: number;
    label: string;
    value?: string;
}