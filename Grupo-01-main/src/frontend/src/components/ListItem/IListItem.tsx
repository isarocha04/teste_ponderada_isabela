import { ReactNode } from "react";
import IComponent from "../Component/IComponent";

export default interface IListItem extends IComponent {
    children: ReactNode;
}