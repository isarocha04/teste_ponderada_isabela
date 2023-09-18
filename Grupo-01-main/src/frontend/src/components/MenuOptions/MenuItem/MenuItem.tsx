import IMenuItem from "./IMenuItem";

export default function MenuItem(props: IMenuItem) {
    return(
        <li>
            <button className="flex flex-row gap-1 items-center mx-10">
            {props.filtro}
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 48 28" fill="none">
            <path d="M21.5794 26.9939C22.9182 28.3327 25.0925 28.3327 26.4313 26.9939L46.9959 6.42932C48.3347 5.09048 48.3347 2.91621 46.9959 1.57737C45.657 0.238533 43.4828 0.238533 42.1439 1.57737L24 19.7213L5.85607 1.58808C4.51724 0.249243 2.34297 0.249243 1.00413 1.58808C-0.334709 2.92692 -0.334709 5.10119 1.00413 6.44003L21.5687 27.0046L21.5794 26.9939Z" fill="#2E2640"/>
            </svg>
            </button>
        </li>
)}