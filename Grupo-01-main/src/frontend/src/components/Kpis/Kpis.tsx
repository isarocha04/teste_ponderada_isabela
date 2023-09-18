
import IKpis from "./IKpis.tsx";


export default function Kpis(props:IKpis){
    return(
        <div className={`p-2 flex flex-col justify-center shadow-md border-1`}>
            <div className="flex justify-center my-1">
                <img src={props.linkImg} alt="" />
            </div>
            <div className="flex justify-center my-1 text-4xl">{props.quantidade} / {props.quantidadeTotal}</div>
            <div className={`flex justify-center my-1 text-sm`}>{props.mensagem}</div>
        </div>
    )
}