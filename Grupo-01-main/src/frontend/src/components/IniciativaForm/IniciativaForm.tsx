import IIniciativaForm from "./IIniciativaForm"

export default function IniciativaForm(props: IIniciativaForm){
    return(
        <form className="flex flex-col col-start-3 col-span-9 mt-8">
            <div className="flex flex-row items-center justify-between">
                <p className="font-bold p-10 text-4xl text-center">INICIATIVA</p>
                {/* <a href="#" className="border-2 p-2 mr-10 shadow-md border-gray-500">
                <svg  className="" xmlns="http://www.w3.org/2000/svg" width="37" height="30" viewBox="0 0 48 39" fill="none">
                <path d="M27.8551 31.7568C27.6666 31.9452 27.5381 32.1854 27.4858 32.447L26.4148 37.8028C26.3205 38.2744 26.7368 38.6908 27.2091 38.597L32.5656 37.5253C32.8267 37.4728 33.0667 37.3448 33.2552 37.1561L42.6527 27.7586L37.252 22.3578L27.8551 31.7568ZM47.2127 19.3893L45.6302 17.806C44.5757 16.7515 42.8664 16.7515 41.8119 17.806L38.9521 20.6665L44.3529 26.0673L47.2127 23.2075C48.2627 22.1493 48.2627 20.4393 47.2127 19.3893Z" fill="#FF4545"/>
                <path d="M16.7325 19.4119C22.035 19.4119 26.3325 15.1137 26.3325 9.81193C26.3325 4.51017 22.035 0.211914 16.7325 0.211914C11.4975 0.211914 7.20001 4.51017 7.20001 9.81193C7.20001 15.1137 11.4975 19.4119 16.7325 19.4119ZM20.6025 23.0119H12.9975C5.82076 23.0119 0 28.8395 0 36.017C0 37.4495 1.164 38.612 2.5995 38.612H24.0795C23.9861 38.1971 23.9723 37.7637 24.0583 37.334L25.1293 31.9782C25.275 31.249 25.63 30.5862 26.1553 30.0612L29.5843 26.6322C27.2475 24.392 24.09 23.0119 20.6025 23.0119Z" fill="#2E2640"/>
                </svg>
                </a> */}
            </div>

            <div className="mt-3 grid gap-12 gap-y-8 w-full place-content-between grid-cols-2">
                {props.children}
            </div>
        </form>
    )
}