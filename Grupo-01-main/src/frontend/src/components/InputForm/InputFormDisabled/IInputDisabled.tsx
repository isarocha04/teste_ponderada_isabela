import IComponent from "../../Component/IComponent";

export default interface IInputDisabled extends IComponent {
    inputName: string;
    placeholder?: string;
    label: string;
    value?: string
}