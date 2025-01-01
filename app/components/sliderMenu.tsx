import {Link} from "@remix-run/react";
type props = {
    pages:string[][]
    currentPage:number
    noScroll?:boolean
  }
  
  export default function SliderMenu({pages,currentPage,noScroll}: props) {
    return (
      <div className={`w-full flex flex-col items-start overflow-x-auto scroll-snap-x scrollbar-hide`}>
          <ul className={`${noScroll && "w-full"} flex gap-4 overflow-hidden`}>
            {pages.map((item,index) => (
                <Link to={item[1]} className={`${noScroll && "w-full"}`}>
                    <li className={`${noScroll && "w-full flex justify-center"} pb-2 pr-3 pl-3 ${currentPage === index ? "border-b-[1px] border-[#FF0054] " : "border-b-0"} transition-all `}>
                        <p className={` ${currentPage !== index && "text-[#FFADBF]"} hover:text-[#FF0054] transition-colors font-Noto font-bold`}>{item[0]}</p>
                    </li>
                </Link>
            ))}
          </ul>
      </div>
    );
  }