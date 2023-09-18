import IInputDisabled from "./IInputDisabled"


export default function Input(props: IInputDisabled){
    return(
        <div className="rounded-md shadow-sm -space-y-px mb-6">
            <label htmlFor={props.inputName} className="block text-sm font-medium leading-6 text-gray-900">{props.label}</label>
            <input type="text" disabled name={props.inputName} placeholder={props.placeholder} value={props.value} id={props.inputName} autoComplete="given-name" className="block w-full rounded-md border-gray-300 px-3 py-2 mt-1 focus:ring-roxoInteli focus:border-roxoInteli sm:text-sm" />
        </div>
    )
}