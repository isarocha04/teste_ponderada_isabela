import IButtons from "./IButtons"

export default function Buttons(props: IButtons){
    function onClick() {
        if(props.handleClick) {
            props.handleClick();
        }
    }

    // function onEdit() {
    //     if(props.handleEdit) {
    //         props.handleEdit({});
    //     }
    // }

    return(
        <div className="col-span-2 flex justify-center gap-8">
            <button type="button" className="text-sm bg-red text-white border border-black px-3 py-2 rounded-sm font-semibold leading-6 text-gray-900 justify-self-end" onClick={onClick}>{props.label1}</button>
            <button type="button" className="text-sm border border-black px-3 py-2 rounded-sm font-semibold leading-6 text-gray-900 justify-self-end" onClick={onClick}>Salvar</button>
            <button type="submit" className="rounded-sm bg-purple px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 justify-self-start" onClick={onClick}>{props.label2}</button>
        </div>
    )
}