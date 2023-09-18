
import IListItem from "./IListItem"


export default function ListItem(props: IListItem) {
    return(
        <ul className="flex min-w-0 justify-between mx-4 p-3">
            {props.children}
        </ul>
    )
}