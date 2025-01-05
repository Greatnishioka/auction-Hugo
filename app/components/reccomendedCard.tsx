import { Link } from "@remix-run/react";
import {formatNumberWithCommas} from "../hooks/functions";
import Tag from "./tag";
type props = {
    title: string
    tag: string[][]
    bid: string[]
    progress: number
    price: number
}

export default function reccomendedCard({title,tag,bid,progress,price}: props) {
  return (
    <article className="flex h-[248px] bg-[#FF0054] rounded-lg overflow-hidden">
        <div className="w-16 h-full overflow-hidden">
            <img className="h-full object-cover max-w-none object-center" src="https://www.fashion-press.net/img/news/116245/top.jpg" alt="" />
        </div>
        <div className="w-fit flex flex-col gap-4 pt-3 pr-2 pb-6 pl-2">
            <div className="flex flex-col gap-1">
                <h1 className="font-Noto font-bold text-[20px] text-white">
                    {title}
                </h1>
                <div className="flex gap-2">
                {tag.map((tag, index) => {
                    return (
                        <Tag tag={tag} />
                    );
                })}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-1">
                    <span className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15.041" height="15.04" viewBox="0 0 15.041 15.04">
                            <g id="hammer2" transform="translate(-0.001 -0.001)">
                                <path id="パス_20" data-name="パス 20" d="M14.837,13.45,6.779,6.115l.375-.376a1.72,1.72,0,0,0,.5-1.11A.371.371,0,0,0,7.7,4.607l1.512-.946a.635.635,0,0,0-.034-.844L6.543.18A.633.633,0,0,0,5.7.146L4.757,1.663l-.021.043a1.71,1.71,0,0,0-1.107.5L2.2,3.641a1.715,1.715,0,0,0-.5,1.11.371.371,0,0,0-.043.022L.145,5.718a.635.635,0,0,0,.034.844L2.81,9.2a.633.633,0,0,0,.842.034L4.6,7.716l.022-.043a1.71,1.71,0,0,0,1.107-.5l.415-.416,7.316,8.08a.5.5,0,0,0,.727.084l.74-.742a.508.508,0,0,0-.084-.728Z" fill="#fff"/>
                            </g>
                        </svg>
                    </span>
                    <div className="flex gap-3">
                        <p className="font-Noto font-medium text-white text-xs">
                            現在の入札件数
                        </p>
                        <span className="font-Noto font-medium text-white text-xs">
                            {bid.length}件
                        </span>
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full h-3 bg-white overflow-hidden rounded-full">
                        <span style={{ width: `${String(progress)}%` }} className={`block  h-full bg-[#FF9D00] rounded-full`}></span>
                    </div>
                </div>
                <div className="">
                    <p className="font-Noto font-bold text-white text-[32px]">{formatNumberWithCommas(price)}円</p>
                </div>
            </div>
        </div>
    </article>
  );
}
