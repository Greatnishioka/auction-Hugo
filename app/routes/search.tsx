import { useLoaderData, Link } from "@remix-run/react";
import React, { useRef } from 'react';
import { LoaderFunction } from "@remix-run/node";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Header from "../components/header";
import Nav from "../components/nav";
import SliderMenu from "~/components/sliderMenu";

//import { loader } from "../hooks/functions";
import { products } from "../types/type";

// const data:products = useLoaderData<typeof loader>();
// export const loader:LoaderFunction = async () =>{
//     const response = await fetch("http://localhost:1234/api/v1/production/list",{
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });
//     const data = await response.json();

//     return data;
//   };

export default function Index() {

  const splideRef = useRef<any>(null);

  return (
   <div className="w-full flex justify-center items-center">
    <div className="lg:w-[375px] w-full h-full bg-[#FFF8EE] border-r-[1px] border-l-[1px] border-[#000]">
      <Header />
      <main className="flex flex-col gap-4 pt-44 pb-36 pr-3 pl-3">
        <div className="overflow-hidden flex flex-col gap-4">
          <SliderMenu pages={[["aaa","/"],["bbb","/"],["ccc","/"],["ddd","/"],["eee","/"],["fff","/"],["ggg","/"],["hhh","/"],["iii","/"]]} currentPage={1}/>
          <section id="topicImages" className="" aria-label="">
            <div className="splide__track">
              <ul className="splide__list">
              <Splide
                className="w-full"
                aria-label="私のお気に入りの画像集"
                options={{
                  type: "loop",
                  perPage: 1, 
                  focus: "center",
                  gap: "16px",
                  padding: "10%",
                  arrows: false,
                  pagination: false,
                }}
              >
                <SplideSlide className="w-full">
                  <li className="splide__slide aspect-[290/193] w-full overflow-hidden relative rounded">
                    <Link to="" className="">
                      <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t to-transparent from-[#933F3F] z-10"></div>
                      <img className="absolute top-0" src="https://otokaze.jp/wp-content/uploads/2023/05/s230518-12877_%E3%83%88%E3%83%AA%E3%83%9F%E3%83%B3%E3%82%B0%E4%B8%8D%E5%8F%AF.jpg" alt=""  />
                      <h3 className="pl-3 pb-3 pr-16 absolute bottom-0 text-white font-bold text-lg z-20">(生)林檎博’24－景気の回復－チケット(S席)</h3>
                    </Link>
                  </li>
                </SplideSlide>
                <SplideSlide className="w-full">
                  <li className="splide__slide aspect-[290/193] w-full overflow-hidden relative rounded">
                    <Link to="" className="">
                      <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t to-transparent from-[#933F3F] z-10"></div>
                      <img className="absolute top-0" src="https://otokaze.jp/wp-content/uploads/2023/05/s230518-12877_%E3%83%88%E3%83%AA%E3%83%9F%E3%83%B3%E3%82%B0%E4%B8%8D%E5%8F%AF.jpg" alt=""  />
                      <h3 className="pl-3 pb-3 pr-16 absolute bottom-0 text-white font-bold text-lg z-20">(生)林檎博’24－景気の回復－チケット(S席)</h3>
                    </Link>
                  </li>
                </SplideSlide>
                <SplideSlide className="w-full">
                  <li className="splide__slide aspect-[290/193] w-full overflow-hidden relative rounded">
                    <Link to="" className="">
                      <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t to-transparent from-[#933F3F] z-10"></div>
                      <img className="absolute top-0" src="https://otokaze.jp/wp-content/uploads/2023/05/s230518-12877_%E3%83%88%E3%83%AA%E3%83%9F%E3%83%B3%E3%82%B0%E4%B8%8D%E5%8F%AF.jpg" alt=""  />
                      <h3 className="pl-3 pb-3 pr-16 absolute bottom-0 text-white font-bold text-lg z-20">(生)林檎博’24－景気の回復－チケット(S席)</h3>
                    </Link>
                  </li>
                </SplideSlide>
              </Splide>
              </ul>
              <div className="w-8 h-8 absolute top-1/2 left-0 transform -translate-y-1/2" onClick={() => splideRef.current && splideRef.current.splide.go("<")} >
                  <svg className="w-full h-full" id="グループ_121" data-name="グループ 121" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                    <rect id="長方形_74" data-name="長方形 74" width="31" height="32" rx="15.5" transform="translate(3 1.5)" fill="#fff8ee"/>
                    <g id="arrow-right-circle-fill">
                      <g id="グループ_118" data-name="グループ 118">
                        <path id="パス_176" data-name="パス 176" d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0Zm7.875,16.875a1.125,1.125,0,0,1,0,2.25H12.841l4.831,4.829a1.126,1.126,0,1,1-1.593,1.593L9.329,18.8a1.125,1.125,0,0,1,0-1.593l6.75-6.75a1.126,1.126,0,0,1,1.593,1.593l-4.831,4.828Z" fill="#ff0054"/>
                      </g>
                    </g>
                  </svg>
              </div>
              <div className="w-8 h-8 absolute top-1/2 right-0 transform -translate-y-1/2" onClick={() => splideRef.current && splideRef.current.splide.go(">")} >
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                    <g id="グループ_120" data-name="グループ 120" transform="translate(-327 -264.5)">
                      <rect id="長方形_74" data-name="長方形 74" width="31" height="32" rx="15.5" transform="translate(329 266)" fill="#fff8ee"/>
                      <g id="arrow-right-circle-fill" transform="translate(327 264.5)">
                        <g id="グループ_118" data-name="グループ 118">
                          <path id="パス_176" data-name="パス 176" d="M18,0A18,18,0,1,1,0,18,18,18,0,0,1,18,0ZM10.125,16.875a1.125,1.125,0,0,0,0,2.25H23.159l-4.831,4.829a1.126,1.126,0,1,0,1.593,1.593l6.75-6.75a1.125,1.125,0,0,0,0-1.593l-6.75-6.75a1.126,1.126,0,0,0-1.593,1.593l4.831,4.828Z" fill="#ff0054"/>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
            </div>
          </section>
          <section id="trands" className="w-full">
                <ul className="flex flex-col gap-4 w-full">
                  <li className="w-full flex flex-col gap-1 pb-4 border-b-[1px] border-[#FF0054]">
                    <Link to="" className="">
                      <h4 className="font-bold text-base">椎名林檎</h4>
                      <p className="font-medium text-xs">日本のトレンド</p>
                    </Link>
                  </li>
                  <li className="w-full flex flex-col gap-1 pb-4 border-b-[1px] border-[#FF0054]">
                    <Link to="" className="">
                      <h4 className="font-bold text-base">椎名林檎</h4>
                      <p className="font-medium text-xs">日本のトレンド</p>
                    </Link>
                  </li>
                  <li className="w-full flex flex-col gap-1 pb-4 border-b-[1px] border-[#FF0054]">
                    <Link to="" className="">
                      <h4 className="font-bold text-base">椎名林檎</h4>
                      <p className="font-medium text-xs">日本のトレンド</p>
                    </Link>
                  </li>
                  <li className="w-full flex flex-col gap-1 pb-4 border-b-[1px] border-[#FF0054]">
                    <Link to="" className="">
                      <h4 className="font-bold text-base">椎名林檎</h4>
                      <p className="font-medium text-xs">日本のトレンド</p>
                    </Link>
                  </li>
                  <li className="w-full flex flex-col gap-1 pb-4 border-b-[1px] border-[#FF0054]">
                    <Link to="" className="">
                      <h4 className="font-bold text-base">椎名林檎</h4>
                      <p className="font-medium text-xs">日本のトレンド</p>
                    </Link>
                  </li>
                </ul>
          </section>
        </div>
      </main>
      <Nav search={true} />
    </div>

   </div>
  );
}