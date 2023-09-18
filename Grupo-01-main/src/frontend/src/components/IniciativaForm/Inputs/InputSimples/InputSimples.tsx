import IInputSimples from "./IInputSimples"
import { ChangeEvent } from "react"

export default function InputSimples(props: IInputSimples){
    function handleChange(event: ChangeEvent<HTMLInputElement>){
        if(props.onChange) {
            props.onChange(event.target.value);
        }
    }

    return(
        <div className="flex-auto mx-5">
            <label htmlFor={props.idInput} className="block text-sm font-medium leading-6 text-gray-900">{props.label}</label>
            <div className="mt-2">
                <input type={props.type} onChange={handleChange} name={props.idInput} disabled={props.isDisabled} value={props.value} id={props.idInput} autoComplete="family-name" className="block w-full rounded-md border px-1.5 py-1.5 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring focus:ring-roxoInteli focus:ring-inset focus:border-white sm:text-sm sm:leading-6" />
            </div>
        </div>
    )
}