import React, { useEffect, useRef,useState } from 'react';
import { debounce } from '~/hooks/functions';
import { SetState } from '~/types/type';
type props = {
    visible:number;
}

export default function selectBox({visible}: props) {
    //const ref = useRef<HTMLDivElement>(null);
    const [isOKEventListener, setIsOKEventListener] = useState<boolean>(false);


    // useEffect(() => {
    //     function handleClickOutside(event: MouseEvent) {
    //         console.log("aaa");
    //         if (ref.current && !ref.current.contains(event.target as Node)) {
    //         console.log("bbb");
    //             //setVisible(false);
    //         }
    //     }

    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [ref,]);
  return (
    <aside className={`w-full h-full ${visible === 2 && "block"} ${visible === 1 && "pointer-events-none fade-out"} ${visible === 3 && "hidden"} opacity-0 popin-selectBox`}>
        <div className="relative w-full -top-3">
            <div className="absolute right-0 z-20 w-fit">
                <div className="flex  gap-1 absolute top-6 -left-2 w-72 h-[112px] border-2 rounded-full border-[#AC0039] z-50 pointer-events-none">
                    <span className="flex gap-1 absolute -top-[3px] left-12 before:bg-[#FFF8EE] after:bg-[#FFF8EE] after:w-1 after:h-1 before:w-1 before:h-1 before:block after:block">
                        <div className="bg-[#FFF8EE] w-4 h-1"></div>
                    </span>
                </div>
                <span className="h-8 block w-full relative">
                    <svg className="h-full absolute right-20 top-[2px]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="33" height="29" viewBox="0 0 33 29">
                        <g id="マスクグループ_21" data-name="マスクグループ 21" >
                            <path id="パス_231" data-name="パス 231" d="M25.15,28.651,41.661,0,0,14.131Z" transform="translate(12.238 -6.362) rotate(60)" fill="#ff0054"/>
                        </g>
                    </svg>
                </span>
                <ul className="w-72">
                    <li className={`group w-full h-14 pt-6 pr-6 pl-6 flex justify-center items-center bg-[#FF0054] hover:bg-white hover:text-[#FF0054] text-white hover:border-[#FF0054] hover:border-2 font-bold rounded-t-full transition-all`}>
                        <div className="w-full pb-4 flex justify-center items-center gap-2 border-b-[5px]  border-white ">
                            <span className="w-4 h-4 flex justify-center items-center">
                                <svg className="stroke-white group-hover:stroke-[#FF0054] w-full h-full" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <g id="camera" transform="translate(1 1)">
                                        <g id="グループ_227" data-name="グループ 227" transform="translate(0 0)">
                                        <path id="パス_218" data-name="パス 218" d="M5.386,5.067l.356-1.781A1.6,1.6,0,0,1,7.312,2h5.376a1.6,1.6,0,0,1,1.57,1.286l.356,1.781a1.5,1.5,0,0,0,1.11,1.163A3.006,3.006,0,0,1,18,9.147V14.8A3.2,3.2,0,0,1,14.8,18H5.2A3.2,3.2,0,0,1,2,14.8V9.147A3.006,3.006,0,0,1,4.277,6.23,1.5,1.5,0,0,0,5.386,5.067Z" transform="translate(-2 -2)" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                        <circle id="楕円形_3" data-name="楕円形 3" cx="2.87" cy="2.87" r="2.87" transform="translate(5.13 6.841)" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                        <path id="パス_219" data-name="パス 219" d="M11,6h1.435" transform="translate(-3.717 -2.8)" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                            <p className="font-bold text-sm">
                                写真を撮る
                            </p>
                        </div>
                    </li>
                    <li className="group w-full h-14 bg-[#FF0054] hover:bg-white text-white hover:text-[#FF0054] hover:border-2 hover:border-[#FF0054] font-bold relative rounded-b-full">
                        <input className=" w-full h-full hidden" type="file" id="addFile" />
                        <label className="w-full h-full flex justify-center items-center cursor-pointer " htmlFor="addFile">
                            <div className="w-full pt-4 flex justify-center items-center gap-2 absolute top-0 left-0">
                                <span className="stroke-white group-hover:stroke-[#FF0054] w-4 h-4 flex justify-center items-center">
                                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                        <g id="グループ_268" data-name="グループ 268" transform="translate(1 1)">
                                            <path id="パス_229" data-name="パス 229" d="M2,5.2A3.2,3.2,0,0,1,5.2,2h9.6A3.2,3.2,0,0,1,18,5.2v9.6A3.2,3.2,0,0,1,14.8,18H5.2A3.2,3.2,0,0,1,2,14.8Z" transform="translate(-2 -2)" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            <circle id="楕円形_4" data-name="楕円形 4" cx="2" cy="2" r="2" transform="translate(3.013 2.961)" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            <path id="パス_230" data-name="パス 230" d="M13.331,12.488,6,19.967H16.433a3.211,3.211,0,0,0,3.325-3.083v-.106c0-.372-.15-.514-.421-.789l-3.465-3.5a1.812,1.812,0,0,0-2.54,0Z" transform="translate(-3.758 -3.967)" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                        </g>
                                    </svg>
                                </span>
                                <p className="font-bold text-sm">
                                    写真ライブラリから選択する
                                </p>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
  );
}
