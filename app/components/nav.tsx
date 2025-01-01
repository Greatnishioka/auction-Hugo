import { SetState } from "../types/type";
import { Link } from "@remix-run/react";

type props = {
    home?:boolean
    search?:boolean
    auction?:boolean
    directMessage?:boolean
    itemForm?:boolean
    auctionParticipationStatus?:boolean
    itemNumber?:number
    setAuctionParticipationStatus?:SetState<boolean>
    state?:string
    setState?:SetState<string>
}

export default function Nav({home,search,auction,directMessage,itemForm,auctionParticipationStatus,itemNumber,setAuctionParticipationStatus,state,setState}: props) {

    const onChangebidPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState && setState(e.target.value);
    };

    const onKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            console.log("Enter");

              const response = await fetch("http://localhost:1234/api/v1/production/bid",{ 
                  method: 'POST', 
                  headers: {
                    'Content-Type': 'application/json',  
                  },
                  body:JSON.stringify(
                    {   
                        product_id: itemNumber,
                        bid_price: Number(state),
                    }),
                });
              const data = await response.json();
              console.log(data)
          
              return data;
            
        }
      };

  return (
    <div className={`fixed lg:w-[375px] w-full flex flex-col items-center gap-0 bottom-0 pr-3 pl-3 ${auctionParticipationStatus && "z-[9999]"}`}>
        <ul className="w-full h-fit flex flex-col gap-0 relative">
                <li className="w-full bottom-0 z-40 absolute h-fit">
                    <svg className="full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 351 60">
                        <g id="マスクグループ_14" data-name="マスクグループ 14" transform="translate(-12 -683)" >
                            <g id="グループ_176" data-name="グループ 176">
                                <g id="グループ_174" data-name="グループ 174">
                                    <path id="パス_185" data-name="パス 185" d="M2690-428.53s82.216-29.284,175.433-8.1S3065-447.118,3065-447.118v90.307H2690Z" transform="translate(-2690 1168.811)" fill="#ff0054"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </li>
                <li className="w-full bottom-0 z-30 absolute h-fit">
                    <svg className="full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 351 60">
                        <g id="マスクグループ_14" data-name="マスクグループ 14" transform="translate(-12 -683)">
                            <g id="グループ_176" data-name="グループ 176">
                            <g id="グループ_174" data-name="グループ 174">
                                <path id="パス_184" data-name="パス 184" d="M2690-418.292s81.868-18.342,180.981-7.147S3064-460.394,3064-460.394v103.582H2690Z" transform="translate(-2689 1161.811)" fill="#633afb"/>
                            </g>
                            </g>
                        </g>
                    </svg>
                </li>
                <li className="w-full bottom-0 z-20 absolute h-fit">
                    <svg className="full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 351 60">
                        <g id="マスクグループ_14" data-name="マスクグループ 14" transform="translate(-12 -683)" >
                            <g id="グループ_176" data-name="グループ 176">
                                <g id="グループ_174" data-name="グループ 174">
                                    <path id="パス_182" data-name="パス 182" d="M2702-864.841l15.593-142.675c202.852-37.816,405.385,30.137,405.385,30.137V-865.2Z" transform="translate(-2706.949 1744)" fill="#ff9d00"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </li>
                <li className="w-full bottom-0 z-10 absolute h-fit">
                    <svg className="full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 351 60">
                        <g id="マスクグループ_14" data-name="マスクグループ 14" transform="translate(-12 -683)" >
                            <g id="グループ_176" data-name="グループ 176">
                                <g id="グループ_174" data-name="グループ 174">
                                    <path id="パス_183" data-name="パス 183" d="M2704.706-1170.683s26.072,34.409,143.529,53.12,125.263,97.482,125.263,97.482H2704.706Z" transform="translate(-2705.035 1849.429)" fill="#ff5400"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </li>
            </ul>
        <nav className={`w-full bg-[#FF0054] pt-6 pr-8 pb-6 pl-8 duration-500 transition-[gap]`}>
            {/* navに追加機能を与えるためのもの */}
            <ul className={`flex flex-col ease-out ${search || auctionParticipationStatus ? "gap-8":"gap-0"}`}>
                <li className={`${search ? "pb-9 opacity-100" : "pb-0 opacity-0 hidden"} transition-all ease-out`}>
                    <div className={`w-full transition-height duration-200 overflow-hidden ease-out ${search ? "max-h-[24px]" : "max-h-0 "}`}>
                        <input type="text" className={`w-full   rounded  font-Noto font-bold pl-2`} name="" id="" />
                    </div>
                </li>
                {/* 商品ページ */}
                <li className={`${auctionParticipationStatus !== undefined ? "" : "hidden"} ${auctionParticipationStatus ? "pb-9 opacity-100" : "pb-0 opacity-0"} transition-all ease-out`}>
                    <div className={`w-full transition-height duration-200 overflow-hidden transition-all ease-out  ${auctionParticipationStatus ? "max-h-[64px] opacity-100" : "max-h-0 opacity-90"}`}>
                        <div className="w-full" onClick={()=>setAuctionParticipationStatus && setAuctionParticipationStatus(!auctionParticipationStatus)}>
                            <svg className="w-3 h-3 float-right" xmlns="http://www.w3.org/2000/svg" width="12.415" height="12.414" viewBox="0 0 12.415 12.414">
                                <path id="合体_4" data-name="合体 4" d="M-3574.5,1343.5l-5.5,5.5,5.5-5.5-5.5-5.5,5.5,5.5,5.5-5.5-5.5,5.5,5.5,5.5Z" transform="translate(3580.708 -1337.293)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="text-white text-base font-bold" htmlFor="">入札額を入力してください</label>
                            <input onChange={onChangebidPrice} onKeyDown={onKeyDown} type="text" className={`w-full   rounded  font-Noto font-bold pl-2`} name="" id="" />
                        </div>
                    </div>
                </li>
                {/* 後ほど条件式書き換え */}
                <li className={`${auctionParticipationStatus !== undefined ? "" : "hidden"} ${auctionParticipationStatus ? "pb-9 opacity-100" : "pb-0 opacity-0"} transition-all ease-out`}>
                    <div className={`w-full transition-height duration-200 overflow-hidden transition-all ease-out  ${auctionParticipationStatus ? "max-h-[120px] opacity-100" : "max-h-0 opacity-90"}`}>
                        <div className="w-full" onClick={()=>setAuctionParticipationStatus && setAuctionParticipationStatus(!auctionParticipationStatus)}>
                            <svg className="w-3 h-3 float-right" xmlns="http://www.w3.org/2000/svg" width="12.415" height="12.414" viewBox="0 0 12.415 12.414">
                                <path id="合体_4" data-name="合体 4" d="M-3574.5,1343.5l-5.5,5.5,5.5-5.5-5.5-5.5,5.5,5.5,5.5-5.5-5.5,5.5,5.5,5.5Z" transform="translate(3580.708 -1337.293)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-white font-Noto font-bold">落札おめでとうございます！<br className="" />以下のボタンより出品者の方に連絡をお願いします。</p>
                            <Link to="/">
                                <button className="w-full bg-white  font-Noto font-bold rounded-full pt-1 pb-1">
                                    落札者と連絡する
                                </button>
                            </Link>
                        </div>
                    </div>
                </li>  
                <li className={`${itemForm ? "pb-9 opacity-100" : "pb-0 opacity-0 hidden"} transition-all ease-out`}>
                    <div className={`w-full transition-height duration-200 overflow-hidden ease-out ${itemForm ? "max-h-[60px]" : "max-h-0 "}`}>
                        <Link to="/">
                            <button className="w-full bg-white  font-Noto font-bold rounded-full pt-1 pb-1">
                                この内容で記入完了する
                            </button>
                        </Link>
                    </div>
                </li>         
            </ul>
            {/* 商品ページここまで */}
            {/* navに追加機能を与えるためのもの---ここまで--- */}
            <ul className="flex items-center justify-between gap-4">
                    <li className="flex items-center justify-center">
                        <Link to="/" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21.734" height="24" viewBox="0 0 21.734 24">
                                <path id="パス_11" data-name="パス 11" d="M12,0,1.133,8.446V24H8.609V14.611h6.781V24h7.477V8.446Z" transform="translate(-1.133)" fill={home ? "#ffffff" : "#c70241"}/>
                            </svg>
                        </Link>
                    </li>
                    <li className="flex items-center justify-center">
                        <Link to="/search" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23.999" height="24" viewBox="0 0 23.999 24">
                                <g id="search" transform="translate(-0.557 -1.964)">
                                    <path id="パス_13" data-name="パス 13" d="M24,25.408a1.914,1.914,0,0,1-2.7,0l-5.845-5.845a9.6,9.6,0,1,1,2.7-2.7L24,22.709A1.914,1.914,0,0,1,24,25.408Zm-10.951-6.72a7.727,7.727,0,1,0-2.894.563,7.649,7.649,0,0,0,2.892-.563Z" transform="translate(0 0)" fill={search ? "#ffffff" : "#c70241"}/>
                                </g>
                            </svg>
                        </Link>
                    </li>
                <li className="flex items-center justify-center " >
                    <Link to="/manageAuction" className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23.725" height="24" viewBox="0 0 23.725 24">
                            <g id="auction-fill" transform="translate(-16 -5.488)">
                                <path id="パス_174" data-name="パス 174" d="M29.512,27.236v2.252H16V27.236Zm.66-21.748,8.758,8.758-1.592,1.594-1.194-.4-2.789,2.786,6.37,6.37L38.133,26.19l-6.369-6.37-2.707,2.707.319,1.275-1.593,1.592-8.758-8.758,1.593-1.592,1.272.318,7.087-7.086-.4-1.194Z" fill={auction ? "#ffffff" : "#c70241"}/>
                            </g>
                        </svg>
                    </Link>
                </li>
                <li className="flex items-center justify-center">
                    <Link to="" className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23.949" height="24" viewBox="0 0 23.949 24">
                            <g id="message_fill" transform="translate(-12.348 -12.16)">
                                <path id="パス_172" data-name="パス 172" d="M35.365,19.51a11.988,11.988,0,0,0-2.574-3.838,11.931,11.931,0,0,0-8.47-3.512h-.054a11.961,11.961,0,0,0-11,7.371,12.094,12.094,0,0,0,.367,10.039v4.071a1.232,1.232,0,0,0,1.229,1.232h4.066a11.992,11.992,0,0,0,5.344,1.286h.056A12.01,12.01,0,0,0,35.365,19.51Zm-16.39,5.936a1.286,1.286,0,1,1,1.283-1.286A1.285,1.285,0,0,1,18.975,25.446Zm5.346,0A1.286,1.286,0,1,1,25.6,24.16,1.285,1.285,0,0,1,24.322,25.446Zm5.346,0a1.286,1.286,0,1,1,1.283-1.286A1.285,1.285,0,0,1,29.668,25.446Z" fill={directMessage ? "#ffffff" : "#c70241"}/>
                            </g>
                        </svg>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}