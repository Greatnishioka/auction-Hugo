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
        <article className="h-full bg-[#FFE9D9] rounded-lg border border-[#FF0054] overflow-hidden">
            <div className="relative">
                <div className="h-32 w-full overflow-hidden pt-[2px] pr-[2px] pl-[2px] pb-0">
                    <img src={imgSrc} alt="" className="h-full w-full object-cover object-center rounded-[5px]" />
                </div>
                <div className="flex gap-0 absolute bottom-0 right-0">
                    <svg className="h-[29px] relative left-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.922 24">
                        <path d="M4582.039,599.188c4.435,0-1.382-24,13.922-24h0v24Z"  transform="translate(-4582.039 -575.188)" fill="#ff0054"/>
                        <path id="パス_215" data-name="パス 215" d="M2442.712,1331c-14.683,0-8.705,15.456-14.221,23.456" transform="translate(-2428.491 -1330.5)" fill="none" stroke="#FFE9D9" stroke-width="1"></path>
                        <text x="70%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="10">
                                ¥
                        </text>
                    </svg>

                    <div className="flex gap-[2px] items-end bottom-0 bg-[#FF0054] border-t-[1px] border-[#FFE9D9] pt-[2px] pr-2 pb-[2px] pl-[1px]">
                        <p className="text-white text-base">{formatNumberWithCommas(price)}</p>
                    </div>
                </div>
            </div>
            <div className="pt-2 pr-1 pb-2 pl-1 ">
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
                </ul>
            </div>
        </article>
    </Link>
  );
}