
import IComponent from "../../../Component/IComponent";

export default interface IInputDuplo extends IComponent {
    isDisabled1?: boolean;
    isDisabled2?: boolean;
    label1: string ;
    label2: string ;
    id1: string;
    id2: string;
    type1: string;
    type2: string;

}