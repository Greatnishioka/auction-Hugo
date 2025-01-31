import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import Header from "../components/header";
import Nav from "../components/nav";
import Tag  from "~/components/tag";
import { formatNumberWithCommas } from "~/hooks/functions";
import { useEffect, useState } from "react";
import { products } from "../types/type";

export const loader: LoaderFunction = async ({ params }) => {
  const { itemNumber } = params;

  const response = await fetch("http://localhost:1234/api/v1/production/getDetail",{ 
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',  
    },
    body: JSON.stringify(
      {
        product_id:Number(itemNumber)
      }
    )
  });
  const data = await response.json();

  return data;
};

export default function ProductPage() {
  const [auctionParticipationStatus, setAuctionParticipationStatus] = useState<boolean>(false);
  const [bidState,setBidState] = useState<string>("");

  const product:products = useLoaderData<typeof loader>();
  useEffect(() => {

  if (typeof window !== 'undefined') {
    const productsHistoryList:string|null = localStorage.getItem("productsHistory");
    if(productsHistoryList){
      const productsHistory:string[][] = JSON.parse(productsHistoryList);
      productsHistory.unshift([`/items/${String(product.product_id)}`,product.product_image_url],);
      localStorage.setItem("productsHistory",JSON.stringify(productsHistory));
    }
    else{
      const productsHistory:string[][] = [[String(product.product_id),product.product_image_url],];
      localStorage.setItem("productsHistory",JSON.stringify(productsHistory));
    }
  }
},[]);
  

  const bid = ["aaa","bbb"];
  const unsold = true;
  return (
    <div className="w-full flex justify-center items-center">
        <div className="lg:w-[375px] w-full h-full bg-[#FFF8EE] border-r-[1px] border-l-[1px] border-[#000]">
          <div onClick={() => setAuctionParticipationStatus(false)} className={`fixed h-screen lg:w-[375px] w-full bg-[#FFF8EE] ${auctionParticipationStatus ? "opacity-80 pointer-events-auto" : "opacity-0 pointer-events-none"} z-50 transition-opacity duration-150`}>
          </div>
          <Header />
          <main className="flex flex-col gap-10 pt-44 pb-36 pr-3 pl-3">
            {unsold ? (  
              undefined
              ) : (
                <div className="w-full lg:w-[351px] fixed top-44 ">
                <div className="float-right w-32 h-10 rounded-l-full flex justify-center items-center bg-[#FF9D00]">
                  <p className="text-base text-white">落札済み</p>
                </div>
              </div>
              )
            }
            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-1">
                <p className="text-xs  font-bold">2024.12.22</p>
                <div className="flex gap-2">
                {/* {product.product_tags.tags.map((item,index) => (
                  <Tag key={index} tag={item} colorRed={true}/>
                ))} */}
                </div>
                <h1 className="text-2xl  font-bold">{product.product_title}</h1>
              </div>
              <div className="">
                <ul className="flex gap-3">
                  {/* あとでmap関数に変更 */}
                  <li className="aspect-[352/235] overflow-hidden w-full">
                    <img src={product.product_image_url} alt="" className="w-full h-full object-cover object-center" />
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 pt-2 pr-4 pb-6 pl-4 rounded bg-[#FFE9D9] border border-[#FACFC5] shadow-custom">
                <div className="flex flex-col gap-6 items-center">
                  <h3 className="text-xs font-bold ">現在の入札額</h3>
                  {/* ここをコメントアウトしたら動いた */}
                  <p className="text-3xl  font-bold ">{product.product_price}円</p>
                  {unsold ? 
                  <div className="w-full rounded-full pt-1 pb-1 flex justify-center items-center bg-[#FF0054] text-white text-xs font-bold" onClick={() => setAuctionParticipationStatus(true)}>入札する</div>
                  :
                  <div className="w-full rounded-full pt-1 pb-1 flex justify-center items-center bg-[#BABABA] text-white text-xs font-bold">落札済み</div>
                  }
                </div>
                <div className="w-full flex justify-between">
                  <div className="flex gap-1">
                      <span className="flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15.041" height="15.04" viewBox="0 0 15.041 15.04">
                              <g id="hammer2" transform="translate(-0.001 -0.001)">
                                  <path id="パス_20" data-name="パス 20" d="M14.837,13.45,6.779,6.115l.375-.376a1.72,1.72,0,0,0,.5-1.11A.371.371,0,0,0,7.7,4.607l1.512-.946a.635.635,0,0,0-.034-.844L6.543.18A.633.633,0,0,0,5.7.146L4.757,1.663l-.021.043a1.71,1.71,0,0,0-1.107.5L2.2,3.641a1.715,1.715,0,0,0-.5,1.11.371.371,0,0,0-.043.022L.145,5.718a.635.635,0,0,0,.034.844L2.81,9.2a.633.633,0,0,0,.842.034L4.6,7.716l.022-.043a1.71,1.71,0,0,0,1.107-.5l.415-.416,7.316,8.08a.5.5,0,0,0,.727.084l.74-.742a.508.508,0,0,0-.084-.728Z" fill="#FF0054"/>
                              </g>
                          </svg>
                      </span>
                      <div className="flex gap-3">
                          <p className="font-Noto font-medium  text-xs">
                              現在の入札件数
                          </p>
                          <span className="font-Noto font-medium  text-xs">
                              {bid.length}件
                          </span>
                      </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <ul className="flex ">
                      <li className=""><div className="bg-black rounded-full w-3 h-3"></div></li>
                      <li className=""><div className="bg-black rounded-full w-3 h-3"></div></li>
                      <li className=""><div className="bg-black rounded-full w-3 h-3"></div></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <ul className="flex flex-col gap-6">
                {product.product_text.product_text.map((item,index) => (
                <li key={index} className="font-medium ">{item}</li>
                ))}
              </ul>
            </div>
            <div className=" bg-[#FF0054] rounded-lg overflow-hidden">
              {/* <div className="w-full pb-2 flex items-center gap-4">
                <h2 className="text-2xl text-white font-bold">Thresholds</h2>
                <span className="text-xs text-white font-medium">落札特典</span>
              </div> */}
              <ul className="flex flex-col gap-16">
                {product.product_thresholds.map((item,index) => {
                  return(
                  
                  <li key={index} className="flex flex-col gap-0">
                    
                    <div className={`pr-4 pb-8 pl-4 flex flex-col gap-2 ${item.threshold_status === "0" ? "bg-[#FF9D00]" : ""}`}>
                      <div className="flex gap-1 items-center bg-white rounded-full pt-2 pr-4 pb-2 pl-4">
                        <span className={`text-xl font-bold ${item.threshold_status === "0" ? "text-[#FF9D00]" : ""}`}>{item.threshold_price}</span>
                        <p className={`text-xs font-bold ${item.threshold_status === "0" ? "text-[#FF9D00]" : ""}`}>円以上での落札の場合</p>
                      </div>
                      <div className="h-full w-full overflow-hidden rounded">
                        <img src={item.threshold_img_src} alt="" className="w-full h-full object-cover object-center" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-white text-base font-bold">{item.threshold_title}</h3>
                        <p className="text-white text-xs font-medium">{item.threshold_context}</p>
                      </div>
                    </div>
                    {item.threshold_status === "0" ? 
                    <>
                    <div className="">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="351" height="29" viewBox="0 0 351 29">
                        <g id="マスクグループ_8" data-name="マスクグループ 8" transform="translate(-12 -1122)" >
                          <ellipse id="楕円形_2" data-name="楕円形 2" cx="248" cy="92.5" rx="248" ry="92.5" transform="translate(-60 966)" fill="#ff9d00"/>
                        </g>
                      </svg>
                    </div>
                    </>
                    :
                    undefined
                  }
                  </li>
                )})}
              </ul>

            </div>
          </main>
          <Nav home={true} auctionParticipationStatus={auctionParticipationStatus} itemNumber={product.product_id} setAuctionParticipationStatus={setAuctionParticipationStatus} state={bidState} setState={setBidState} />
        </div>
    
       </div>
  );
}
