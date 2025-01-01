import { useLoaderData } from "@remix-run/react";
import {Link} from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import Header from "../components/header";
import Nav from "../components/nav";
import IconSvg from "../components/svgParts/importForm"
import Tag  from "~/components/tag";
import { formatNumberWithCommas } from "~/hooks/functions";
import { useState } from "react";
import { products } from "../types/type";

//export const loader: LoaderFunction = async ({ params }) => {
//   const { itemNumber } = params;

//   const response = await fetch("http://localhost:1234/api/v1/production/getDetail",{ 
//     method: 'POST', 
//     headers: {
//       'Content-Type': 'application/json',  
//     },
//     body: JSON.stringify(
//       {
//         product_id:Number(itemNumber)
//       }
//     )
//   });
//   const data = await response.json();

//   return data;
//};

export default function ItemForm() {
  return (
    <div className="w-full flex justify-center items-center">
        <div className="lg:w-[375px] w-full h-full bg-[#FFF8EE] border-r-[1px] border-l-[1px] border-[#000]">
          <Header />
          <main className="flex flex-col gap-8 pt-44 pb-36 pr-3 pl-3">
            <section className="">
              <div className="flex justify-center pb-2 border-b-[1px] border-[#FF0054]">
                  <h1 className="font-bold text-xs">(生)林檎博'24－景気の回復－チケット(S席)</h1>
              </div>
            </section>
            <section className="">
              <div className="aspect-[352/235] overflow-hidden w-full">
                <img src="https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2019/09/04/da516bd5-175f-4271-aa1a-824bf071b054/control-remedy-entertainment-interview" alt="" className="w-full h-full object-cover object-center" />
              </div>
            </section>
            <section className="">
              <div className="flex flex-col gap-4">
                <ul className="grid grid-cols-3 grid-rows-[auto] gap-2">
                  <li className="w-full h-auto flex flex-col items-center gap-1 border-[1px] border-[#FF0054] rounded-lg p-3">
                    <div className="h-6">
                      <IconSvg imgName="adress" />
                    </div>
                    <h3 className="font-bold text-xs">住所</h3>
                    <p className="font-medium text-[8px]">商品発送のため</p>
                  </li>
                  <li className="w-full h-auto flex flex-col items-center gap-1 border-[1px] border-[#FF0054] rounded-lg p-3">
                    <div className="h-6">
                      <IconSvg imgName="adress" />
                    </div>
                    <h3 className="font-bold text-xs">ファンクラブ番号ファンクラブ番号</h3>
                    <p className="font-medium text-[8px]">商品発送のため</p>
                  </li>
                </ul>
                <div className="flex gap-3 bg-[#FF0054] p-3 rounded">
                  <span className="w-7 h-7 flex justify-center items-center">
                    <svg className="w-full h-full" id="exclamation-circle-fill" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                      <g id="グループ_183" data-name="グループ 183" transform="translate(0 0)">
                        <path id="パス_185" data-name="パス 185" d="M29,14.5A14.5,14.5,0,1,1,14.5,0,14.5,14.5,0,0,1,29,14.5ZM14.5,7.25a1.64,1.64,0,0,0-1.631,1.8L13.5,15.41a1,1,0,0,0,1.994,0l.634-6.356A1.64,1.64,0,0,0,14.5,7.25Zm0,10.875a1.813,1.813,0,1,0,1.813,1.813A1.813,1.813,0,0,0,14.5,18.125Z" transform="translate(0 0)" fill="#fff"/>
                      </g>
                    </svg>
                  </span>
                  <p className="text-xs font-medium text-white">落札した商品を受け取るために必要な情報を入力してください</p>
                </div>
              </div>
            </section>
            <section className="">
              <ul className="flex flex-col gap-3">
                <li className="flex flex-col gap-2">
                  <label className="font-bold text-xs" htmlFor="">aaa</label>
                  <input type="text" className="bg-[#FFF8EE] border-[1px] border-[#FF0054] rounded h-8 p-1" />
                </li>
                <li className="flex flex-col gap-2">
                  <label className="font-bold text-xs" htmlFor="">aaa</label>
                  <input type="text" className="bg-[#FFF8EE] border-[1px] border-[#FF0054] rounded h-8 p-1" />
                </li>
              </ul>
            </section>
          </main>
          <Nav home={true} itemForm={true} />
        </div>
    </div>
  );
}
