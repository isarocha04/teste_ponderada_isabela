import IDropdownOption from "./IDropdownOption"

export default function DropdownOption(props:IDropdownOption){
    return(
        <li className="flex gap-2 justify-between align-center items-center px-4 py-1 hover:bg-purple hover:text-white border-b">
            <div className=" font-semibold">
                {props.competencia}
            </div>
            <div className="flex border-solid border-1 px-2 justify-end outline outline-offset-0 rounded-md ">
                {props.rating}
            </div>
        </li>
    )
}