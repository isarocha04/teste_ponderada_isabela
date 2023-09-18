import { ChangeEvent } from "react"
import IInputLargeBox from "./IInputLargeBox"

export default function IInputLargeBox(props: IInputLargeBox){
    function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
        if(props.onChange) {
            props.onChange(event.target.value);
        }
    }

    return(
        <div className="m-5">
            <label htmlFor={props.idInput} className="block text-sm font-medium leading-6 text-gray-900">{props.label}</label>
            <div className="mt-2">
                <textarea id={props.idInput} name={props.idInput} rows={props.rows} onChange={handleChange} autoComplete="email" className="block w-full rounded-md border px-1.5 py-1.5 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring focus:ring-roxoInteli focus:ring-inset focus:border-white sm:text-sm sm:leading-6">
                    {props.value}
                </textarea>
            </div>
        </div>
    )
}