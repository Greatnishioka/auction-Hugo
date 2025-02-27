import { useLoaderData } from "@remix-run/react";
import {LoaderFunction } from "@remix-run/node";
import '@splidejs/react-splide/css';

import Header from "../components/header";
import Nav from "../components/nav";
import ReccomendedCard from "../components/reccomendedCard";
import BrowsingHistory from "~/components/browsingHistory";
import ProductCard from "~/components/productCard";

//import { loader } from "../hooks/functions";
import { products } from "../types/type";
import { useState,useEffect } from "react";
import { l } from "node_modules/vite/dist/node/types.d-aGj9QkWt";

// const data:products = useLoaderData<typeof loader>();
export const loader:LoaderFunction = async () =>{
    const response = await fetch("http://localhost:1234/api/v1/production/list",{ 
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',  
        }
      });
    const data = await response.json();

    return data;
  };

export default function Index() {
  
  const [data,setData] = useState<products[]>(useLoaderData<typeof loader>());
  const [productsHistory,setProductsHistory] = useState<string[][]>([]);

  useEffect(() => {
    // ローカルストレージから閲覧履歴を取得
    if (typeof window !== 'undefined') {
      const productsHistoryList:string|null = localStorage.getItem("productsHistory");
      if(productsHistoryList){
        const a:string[][] = JSON.parse(productsHistoryList);
        if(a.length>20){
          a.pop();
          localStorage.setItem("productsHistory",JSON.stringify(a));
        }
        setProductsHistory(a);
      }
    }
},[]);


  return (
    
   <div className="w-full flex justify-center items-center">
    <div className="lg:w-[375px] w-full h-full bg-[#FFF8EE] border-r-[1px] border-l-[1px] border-[#000]">
      <Header />
      <main className="flex flex-col gap-4 pt-44 pb-36 pr-3 pl-3">
        <ReccomendedCard title="(生)林檎博'24－景気の回復－チケット(S席)" tag={[["person","aaa"],["ticket","bbb"]]} bid={["aaa","bbb"]} price={82000} progress={35}/>
        <BrowsingHistory pages={productsHistory} />
        <div className="">
          <ul className="grid grid-cols-3 gap-1">
            {data.map((item:products,index:number) => {
              const aaa = item.product_thresholds[0].threshold_price;
              return (

              <li key={index} className="">
                <ProductCard colorRed={true} title={item.product_title} tag={item.product_tags.tags} progress={item.product_price/aaa} price={item.product_price} link={`items/${item.product_id}`} imgSrc={item.product_image_url}/>
              </li>
                );
              })}
          </ul>
        </div>
      </main>
      <Nav home={true} />
    </div>

   </div>
  );
}