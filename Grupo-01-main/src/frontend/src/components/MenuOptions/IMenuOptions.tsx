import { ReactNode } from "react";
import IComponent from "../Component/IComponent";

export default interface IMenuOptions extends IComponent {
    children: ReactNode;
}