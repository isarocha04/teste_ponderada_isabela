import IInputDuplo from "./IInputDuplo"

export default function InputDuplo(props: IInputDuplo){
    return(
        <div className="flex flex-col m-5">
            <label htmlFor={props.id1} className="block text-sm font-medium leading-6 text-gray-900">{props.label1}</label>
            <div className="mt-2 mb-2">
                <input id={props.id1} name={props.id1} type={props.type1} autoComplete="email" disabled={props.isDisabled1} className="block w-full rounded-md border px-1.5 py-1.5 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring focus:ring-roxoInteli focus:ring-inset focus:border-white sm:text-sm sm:leading-6" />
            </div>
            <label htmlFor={props.id2} className="block text-sm font-medium leading-6 text-gray-900">{props.label2}</label>
            <div className="mt-2">
                <input id={props.id2} name={props.id2} type={props.type2} autoComplete="email" disabled={props.isDisabled2} className="block w-full rounded-md border px-1.5 py-1.5 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring focus:ring-roxoInteli focus:ring-inset focus:border-white sm:text-sm sm:leading-6" />
            </div>
        </div>
    )
}