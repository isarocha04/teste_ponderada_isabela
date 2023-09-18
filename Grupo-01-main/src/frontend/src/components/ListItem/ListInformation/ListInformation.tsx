import IListInformation from "./IListInformation";


export default function ListItem(props: IListInformation){
    return(
        <li className="min-w-0 flex flex-row gap-2 w-1/4">
            <img className="m-1 h-12 w-12 flex-none rounded-full bg-gray-50" src={props.logoEmpresa} alt=""></img>
            <div className="flex flex-col ">
                <p className="text-sm font-semibold leading-6 text-gray-900">{props.nomeEmpresa}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{props.emailEmpresa}</p>
            </div>
        </li>
    )
}