import { useState,useEffect } from "react";
import { Link } from "@remix-run/react";

type props = {
    notificationsCount:number
}

export default function bell({notificationsCount}: props) {
    // const [open,setOpen] = useState<boolean>();
    // 0:通知なし 1:通知あり 2:通知表示中
    const [buttomState,setButtomState] = useState<1|2|3>();

    useEffect(() => {
        notificationsCount === 0 ? setButtomState(1) : setButtomState(2);
    },[])

  return (
    <>
    {buttomState === 1 && 
        <div className="z-50 w-full pr-[40px] absolute top-[100px]">
            <svg onClick={() => {setButtomState(3)}} className="float-right" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
                <g id="グループ_19" data-name="グループ 19" transform="translate(0 0.261)">
                    <rect id="長方形_3" data-name="長方形 3" width="56" height="56" rx="28" transform="translate(0 -0.261)" fill="#ececec"/>
                    <g id="bell" transform="translate(15.963 16)">
                    <path id="パス_3" data-name="パス 3" d="M10.427,0V1.482a7.316,7.316,0,0,0-5.739,7.11v6.393L-.037,19.071v1.112H24.037V19.071l-4.724-4.085V8.593a7.316,7.316,0,0,0-5.739-7.11V0ZM12,20.492a1.754,1.754,0,1,0,1.755,1.753A1.754,1.754,0,0,0,12,20.492Z" transform="translate(0.037)" fill="#a1a1a1"/>
                    </g>
                </g>
            </svg>
        </div>
    }
    {buttomState && buttomState === 2 && 
        <div className="z-50 w-full pr-[40px] absolute top-[100px] ">
            <svg onClick={() => {setButtomState(3)}} className="float-right" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
                <g id="グループ_22" data-name="グループ 22" transform="translate(0 0.261)">
                    <g id="長方形_3" data-name="長方形 3" transform="translate(0 -0.261)" fill="#fff8ee" stroke="#ff0054" stroke-width="1">
                        <rect width="56" height="56" rx="28" stroke="none"/>
                        <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" fill="none"/>
                    </g>
                    <g id="bell" transform="translate(15.963 16)">
                        <path id="パス_3" data-name="パス 3" d="M10.427,0V1.482a7.316,7.316,0,0,0-5.739,7.11v6.393L-.037,19.071v1.112H24.037V19.071l-4.724-4.085V8.593a7.316,7.316,0,0,0-5.739-7.11V0ZM12,20.492a1.754,1.754,0,1,0,1.755,1.753A1.754,1.754,0,0,0,12,20.492Z" transform="translate(0.037)" fill="#ff0054"/>
                    </g>
                </g>
            </svg>
            <div className="w-fit relative float-right top-[8px] right-[-26px] border border-white pr-1 pl-1 pt-[2px] pb-[2px] rounded-full bg-[#FF0054]">
                <p className="text-[8px] text-white ">{notificationsCount}</p>
            </div>
        </div>
    }
    {buttomState === 3 && 
    <div className="">
        <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="268.792" height="282.001" viewBox="0 0 268.792 282.001">
                <g id="合体_1" data-name="合体 1" transform="translate(2690 -1226)" fill="#fff8ee">
                    <path d="M -2446.000244140625 1507.50048828125 L -2682 1507.50048828125 C -2686.1357421875 1507.50048828125 -2689.500244140625 1504.135986328125 -2689.500244140625 1500.000366210938 L -2689.500244140625 1233.999877929688 C -2689.500244140625 1229.864379882812 -2686.1357421875 1226.499877929688 -2682 1226.499877929688 L -2446.000244140625 1226.499877929688 C -2441.86474609375 1226.499877929688 -2438.500244140625 1229.864379882812 -2438.500244140625 1233.999877929688 L -2438.500244140625 1247.808349609375 L -2438.500244140625 1248.3798828125 L -2437.933837890625 1248.303955078125 L -2422.27734375 1246.205444335938 C -2422.247802734375 1246.201416015625 -2422.21875 1246.199462890625 -2422.191162109375 1246.199462890625 C -2421.907958984375 1246.199462890625 -2421.7607421875 1246.41552734375 -2421.720703125 1246.6005859375 C -2421.695556640625 1246.717529296875 -2421.672607421875 1247.005737304688 -2422.004638671875 1247.156127929688 L -2438.20654296875 1254.494384765625 L -2438.500244140625 1254.62744140625 L -2438.500244140625 1254.949829101562 L -2438.500244140625 1500.000366210938 C -2438.500244140625 1504.135986328125 -2441.86474609375 1507.50048828125 -2446.000244140625 1507.50048828125 Z" stroke="none"/>
                    <path d="M -2446.000244140625 1507.00048828125 C -2442.140380859375 1507.00048828125 -2439.000244140625 1503.860229492188 -2439.000244140625 1500.000366210938 L -2439.000244140625 1254.305053710938 L -2422.2119140625 1246.701171875 L -2439.000244140625 1248.951293945312 L -2439.000244140625 1233.999877929688 C -2439.000244140625 1230.140014648438 -2442.140380859375 1226.999877929688 -2446.000244140625 1226.999877929688 L -2682 1226.999877929688 C -2685.85986328125 1226.999877929688 -2689.000244140625 1230.140014648438 -2689.000244140625 1233.999877929688 L -2689.000244140625 1500.000366210938 C -2689.000244140625 1503.860229492188 -2685.85986328125 1507.00048828125 -2682 1507.00048828125 L -2446.000244140625 1507.00048828125 M -2446.000244140625 1508.00048828125 L -2682 1508.00048828125 C -2686.418212890625 1508.00048828125 -2690.000244140625 1504.41845703125 -2690.000244140625 1500.000366210938 L -2690.000244140625 1233.999877929688 C -2690.000244140625 1229.581787109375 -2686.418212890625 1225.999877929688 -2682 1225.999877929688 L -2446.000244140625 1225.999877929688 C -2441.582275390625 1225.999877929688 -2438.000244140625 1229.581787109375 -2438.000244140625 1233.999877929688 L -2438.000244140625 1247.808349609375 L -2422.34375 1245.709838867188 C -2422.29150390625 1245.702880859375 -2422.240478515625 1245.699462890625 -2422.191162109375 1245.699462890625 C -2421.1640625 1245.699462890625 -2420.797119140625 1247.158081054688 -2421.79833984375 1247.611572265625 L -2438.000244140625 1254.949829101562 L -2438.000244140625 1500.000366210938 C -2438.000244140625 1504.41845703125 -2441.582275390625 1508.00048828125 -2446.000244140625 1508.00048828125 Z" stroke="none" fill="#ff0054"/>
                </g>
            </svg>
            {/* 後ほどh-[282px]はJs制御に変更 */}
            <div className="z-50 h-[282px] overflow-hidden absolute left-0 pt-3 pl-6">
                <ul className="flex flex-col gap-3">
                    {/* あとでmap関数に変更 */}
                    <li className="flex flex-col gap-1 pb-2 border-b border-[#FF0054]">
                        <Link to="" className="">
                            <h3 className="flex items-center gap-1">
                                <span className="w-fit h-fit">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <g id="exclamation-circle_fill" transform="translate(-0.64 -0.64)">
                                            <path id="パス_181" data-name="パス 181" d="M8.64.64a8,8,0,1,0,8,8A8,8,0,0,0,8.64.64ZM8.069,4.783a.143.143,0,0,1,.143-.143h.857a.143.143,0,0,1,.143.143V9.64a.143.143,0,0,1-.143.143H8.211a.143.143,0,0,1-.143-.143ZM8.64,12.64a.857.857,0,1,1,.857-.857.857.857,0,0,1-.857.857Z" transform="translate(0 0)" fill="#ff0054"/>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-base font-bold ">落札されました！</p>
                            </h3>
                            <p className="text-[10px] font-medium ">(生)林檎博’24－景気の回復－チケット(S席)</p>
                        </Link>
                    </li>
                    <li className="flex flex-col gap-1 pb-2 border-b border-[#FF0054]">
                        <Link to="" className="">
                            <h3 className="flex items-center gap-1">
                                <span className="w-fit h-fit">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <g id="exclamation-circle_fill" transform="translate(-0.64 -0.64)">
                                            <path id="パス_181" data-name="パス 181" d="M8.64.64a8,8,0,1,0,8,8A8,8,0,0,0,8.64.64ZM8.069,4.783a.143.143,0,0,1,.143-.143h.857a.143.143,0,0,1,.143.143V9.64a.143.143,0,0,1-.143.143H8.211a.143.143,0,0,1-.143-.143ZM8.64,12.64a.857.857,0,1,1,.857-.857.857.857,0,0,1-.857.857Z" transform="translate(0 0)" fill="#ff0054"/>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-base font-bold ">落札されました！</p>
                            </h3>
                            <p className="text-[10px] font-medium ">(生)林檎博’24－景気の回復－チケット(S席)</p>
                        </Link>
                    </li>
                    <li className="flex flex-col gap-1 pb-2 border-b border-[#FF0054]">
                        <Link to="" className="">
                            <h3 className="flex items-center gap-1">
                                <span className="w-fit h-fit">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <g id="exclamation-circle_fill" transform="translate(-0.64 -0.64)">
                                            <path id="パス_181" data-name="パス 181" d="M8.64.64a8,8,0,1,0,8,8A8,8,0,0,0,8.64.64ZM8.069,4.783a.143.143,0,0,1,.143-.143h.857a.143.143,0,0,1,.143.143V9.64a.143.143,0,0,1-.143.143H8.211a.143.143,0,0,1-.143-.143ZM8.64,12.64a.857.857,0,1,1,.857-.857.857.857,0,0,1-.857.857Z" transform="translate(0 0)" fill="#ff0054"/>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-base font-bold ">落札されました！</p>
                            </h3>
                            <p className="text-[10px] font-medium ">(生)林檎博’24－景気の回復－チケット(S席)</p>
                        </Link>
                    </li>
                    <li className="flex flex-col gap-1 pb-2 border-b border-[#FF0054]">
                        <Link to="" className="">
                            <h3 className="flex items-center gap-1">
                                <span className="w-fit h-fit">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <g id="exclamation-circle_fill" transform="translate(-0.64 -0.64)">
                                            <path id="パス_181" data-name="パス 181" d="M8.64.64a8,8,0,1,0,8,8A8,8,0,0,0,8.64.64ZM8.069,4.783a.143.143,0,0,1,.143-.143h.857a.143.143,0,0,1,.143.143V9.64a.143.143,0,0,1-.143.143H8.211a.143.143,0,0,1-.143-.143ZM8.64,12.64a.857.857,0,1,1,.857-.857.857.857,0,0,1-.857.857Z" transform="translate(0 0)" fill="#ff0054"/>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-base font-bold ">落札されました！</p>
                            </h3>
                            <p className="text-[10px] font-medium ">(生)林檎博’24－景気の回復－チケット(S席)</p>
                        </Link>
                    </li>
                    <li className="flex flex-col gap-1 pb-2 border-b border-[#FF0054]">
                        <Link to="" className="">
                            <h3 className="flex items-center gap-1">
                                <span className="w-fit h-fit">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <g id="exclamation-circle_fill" transform="translate(-0.64 -0.64)">
                                            <path id="パス_181" data-name="パス 181" d="M8.64.64a8,8,0,1,0,8,8A8,8,0,0,0,8.64.64ZM8.069,4.783a.143.143,0,0,1,.143-.143h.857a.143.143,0,0,1,.143.143V9.64a.143.143,0,0,1-.143.143H8.211a.143.143,0,0,1-.143-.143ZM8.64,12.64a.857.857,0,1,1,.857-.857.857.857,0,0,1-.857.857Z" transform="translate(0 0)" fill="#ff0054"/>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-base font-bold ">落札されました！</p>
                            </h3>
                            <p className="text-[10px] font-medium ">(生)林檎博’24－景気の回復－チケット(S席)</p>
                        </Link>
                    </li>
                    <li className="flex flex-col gap-1 pb-2 border-b border-[#FF0054]">
                        <Link to="" className="">
                            <h3 className="flex items-center gap-1">
                                <span className="w-fit h-fit">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <g id="exclamation-circle_fill" transform="translate(-0.64 -0.64)">
                                            <path id="パス_181" data-name="パス 181" d="M8.64.64a8,8,0,1,0,8,8A8,8,0,0,0,8.64.64ZM8.069,4.783a.143.143,0,0,1,.143-.143h.857a.143.143,0,0,1,.143.143V9.64a.143.143,0,0,1-.143.143H8.211a.143.143,0,0,1-.143-.143ZM8.64,12.64a.857.857,0,1,1,.857-.857.857.857,0,0,1-.857.857Z" transform="translate(0 0)" fill="#ff0054"/>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-base font-bold ">落札されました！</p>
                            </h3>
                            <p className="text-[10px] font-medium ">(生)林檎博’24－景気の回復－チケット(S席)</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="z-50 w-full pr-[40px] absolute top-[100px] pointer-events-none">
            <svg onClick={() => {setButtomState(1)}} className="float-right pointer-events-auto" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
                <g id="グループ_19" data-name="グループ 19" transform="translate(0 0.261)">
                    <g id="長方形_3" data-name="長方形 3" transform="translate(0 -0.261)" fill="#ff0054" stroke="#fff" stroke-width="1">
                        <rect width="56" height="56" rx="28" stroke="none"/>
                        <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" fill="none"/>
                    </g>
                    <g id="bell" transform="translate(15.963 16)">
                        <path id="パス_3" data-name="パス 3" d="M10.427,0V1.482a7.316,7.316,0,0,0-5.739,7.11v6.393L-.037,19.071v1.112H24.037V19.071l-4.724-4.085V8.593a7.316,7.316,0,0,0-5.739-7.11V0ZM12,20.492a1.754,1.754,0,1,0,1.755,1.753A1.754,1.754,0,0,0,12,20.492Z" transform="translate(0.037)" fill="#fff"/>
                    </g>
                </g>
            </svg>
        </div>
    </div>
    }

    </>
  );
}