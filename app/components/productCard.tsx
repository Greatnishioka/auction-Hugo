import { Link } from "@remix-run/react";
import {formatNumberWithCommas} from "../hooks/functions";
import Tag from "./tag";
type props = {
    tag:string[]
    title:string
    progress:number
    price:number
    link:string
    imgSrc:string
    colorRed?:boolean
}

export default function ProductCard({title,tag,progress,price,link,imgSrc,colorRed}: props) {
    return (
    <Link to={link}>
        <article className="bg-[#FFE9D9] rounded-lg border border-[#FF0054] overflow-hidden">
            <div className="h-32 w-full overflow-hidden">
                <img src={imgSrc} alt="" className="h-full w-full object-cover object-center" />
            </div>
            <div className="pt-2 pr-1 pb-2 pl-1">
                <ul className="flex flex-col gap-1">
                    <li className="">
                        <h3 className="text-[10px]  font-Noto font-bold">{title}</h3>
                    </li>
                    <li className="">
                        <Tag tag={tag} colorRed={colorRed} />
                    </li>
                    <li className="">
                        <div className="w-full">
                            <div className="w-full h-2 overflow-hidden bg-[#FF0054] rounded-full">
                                <span style={{ width: `${String(progress)}%` }} className={`block  h-full bg-[#FF9D00] rounded-full`}></span>
                            </div>
                        </div>
                    </li>
                    <li className="w-full">
                        <p className="text-center text-xs  font-Noto font-bold ">{formatNumberWithCommas(price)}円</p>
                    </li>
                </ul>
            </div>
        </article>
    </Link>
  );
}