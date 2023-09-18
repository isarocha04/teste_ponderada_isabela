import IProfile from "./IProfile"

export default function Profile(props: IProfile){
    return(
        <div className="flex flex-col font-inteli items-center">
            <img className="m-1 h-40 w-40 flex-none rounded-full bg-gray-50" src={props.imgLink} alt="" />
            <div>
                <p className="mt-4 text-4xl font-semibold">{props.nomeEmpresa}</p>
            </div>
        </div>
    )
}

//"https://pbs.twimg.com/profile_images/1374017695394492418/TmjT0iyJ_400x400.jpg"