import Header from "../components/header";
import Nav from "../components/nav";
import SliderMenu from "~/components/sliderMenu";
import ProductCard from "~/components/productCard";
import { useLoaderData } from "@remix-run/react";

//import { loader } from "../hooks/functions";
import {LoaderFunction } from "@remix-run/node";
import { products } from "../types/type";

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

      const data:products[] = useLoaderData<typeof loader>();

  return (
   <div className="w-full flex justify-center items-center">
    <div className="lg:w-[375px] w-full h-full bg-[#FFF8EE] border-r-[1px] border-l-[1px] border-[#000]">
      <Header />
      <main className="w-full flex flex-col gap-4 pt-44 pb-36 pr-3 pl-3">
        <div className="w-full overflow-hidden flex flex-col gap-4">
          <SliderMenu pages={[["入札中","/"],["落札完了","/"]]} currentPage={0} noScroll={true} />
          <div className="w-full">
                <ul className="grid grid-cols-3 gap-3">
                    {/* <p>{data[0].product_title}</p> */}
                    {data.map((item:products,index:number) => {
                    const aaa = item.product_thresholds.product_thresholds[0].threshold_price;
                    return (

                    <li key={index} className="">
                        <ProductCard colorRed={true} title={item.product_title} tag={item.product_tags.tags} progress={item.product_price/aaa} price={item.product_price} link={`items/${item.product_id}`} imgSrc={item.product_image_url}/>
                    </li>
                        );
                    })}
                </ul>
            </div>
        </div>
      </main>
      <Nav auction={true} />
    </div>

   </div>
  );
}