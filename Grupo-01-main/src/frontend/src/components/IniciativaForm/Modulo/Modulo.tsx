import IModulo from "./IModulo"

export default function Modulo(props: IModulo){
    return(
        <div className="col-span-2 place-content-center">
            <label htmlFor="last-name" className="block text-2xl font-bold leading-6 text-gray-900 text-center">MÓDULO</label>
            <div className="mt-3 mx-5 ">
                <div className="items-center">
                    <div className="group relative flex justify-center gap-x-6 rounded-lg p-2 items-center border-2 shadow-md">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-brancoFundo">
                            {/* <img src={props.imgLink} alt="" /> */}
                        </div>
                    <div>
                        <a href="#" className="font-semibold text-xl">
                           {props.nomeProjeto}
                        <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1">{props.turma}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}