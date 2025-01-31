import { useLoaderData } from "@remix-run/react";
import { debounce } from '~/hooks/functions';
import {Link} from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import Header from "../components/header";
import Nav from "../components/nav";
import Caution from "~/components/caution";
import IconSvg from "../components/svgParts/importForm"
import SelectBox from "../components/selectBox";
import QAmodal from "~/components/QAmodal";
import SelectItem from "~/components/selectItem";
import Tag  from "~/components/tag";
import { formatNumberWithCommas } from "~/hooks/functions";
import { useState,useEffect } from "react";
import { products } from "../types/type";

// export const loader: LoaderFunction = async ({ params }) => {
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
// };

export default function ItemForm() {
    //const product:products = useLoaderData<typeof loader>();
    const [clickedList,setClickedList] = useState<boolean[]>([false,false,false,false,false,false,false]);
    const [clickCategoryList,setClickCategoryList] = useState<number[]>([-1,-1,-1]);
    const [selectedCategory,setSelectedCategory] = useState<number[][]>([[]]);
    //const [mediaUploadPre, setMediaUploadPre] = useState<boolean|null>(null)
    const [thresholds,setThresholds] = useState<string[][]>([[]]);
    const [thresholdsModal,setThresholdsModal] = useState<(boolean|null)[]>(thresholds.map(() => null));
    //const [QAmodalvisible,setQAmodalvisible] = useState<boolean|null>(null);
    //1が非表示,2が表示,3が触れていない状態
    const [visibleList,setVisibleList] = useState<(number)[][]>([[3],[3],[3]]);
    const [isOKEventListener, setIsOKEventListener] = useState<boolean>(false);
    console.log("レンダリング！");


    const clickVisibleListState = (arrayIndex:number,index:number) => {
        setVisibleList(prevState => {
            const newState = [...prevState];
            switch(newState[arrayIndex][index]){
                case 1:
                    newState[arrayIndex][index] = 2;
                    break;
                case 2:
                    newState[arrayIndex][index] = 1;
                    break;
                case 3:
                    //newState[arrayIndex] = newState[arrayIndex].map(() => 1);
                    newState[arrayIndex][index] = 2;
                    break;
                default:
                    break;
            }
            // if(newState[arrayIndex][index] !== 1){
            //     newState[arrayIndex][index] = 1;
            //     console.log("GGG");
            // }
            // else{
            //     newState[arrayIndex][index] = 2;
            //     console.log("LLL");
            // }
            //newState[arrayIndex][index] = !newState[arrayIndex][index];
            console.log(newState);
            return newState;
        });
    }

    const clickListState = (index:number) => {
        setClickedList(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };
    const inputThresholdsText = (text:string, arrayIndex:number, index:number) => {
        if(index === 0 && text.length > 15 || index === 0 && text.match(/[^0-9]+/)){
            setThresholds(prevState => {
                return prevState;
            });
        }
        else{
            setThresholds(prevState => {
                const newState = [...prevState];
                newState[arrayIndex][index] = text;
                return newState;
            });
        }
    };
    //モーダル類
    // const onDeleteModalArray = (index:number) => {
    //     setThresholdsModal(prevState => {
    //         const newState = [...prevState];
    //         newState[index] = true;
    //         return newState;
    //     });
    // }
    // const offDeleteModalArray = (index:number) => {
    //     setThresholdsModal(prevState => {
    //         const newState = [...prevState];
    //         newState[index] = false;
    //         return newState;
    //     });
    // };
    // const onQAmodal = () => {
    //     setQAmodalvisible(true);
    // };
    // const offQAmodal = () => {
    //     setQAmodalvisible(false);
    // };

    const deleteArray = (index:number) => {
        setThresholds(prevState => prevState.filter((_, i) => i !== index));
        setThresholdsModal(prevState => prevState.filter((_, i) => i !== index));
    };
    const openSelectorCategory = () => {

        const newState = [...selectedCategory];
        if (newState.some(item =>item.length == 1 || item[0] === -1)) {
            return;
        }
        const length = newState[0].length === 0 ? newState.length - 1 : newState.length;
        newState[length] = [-1];

        setSelectedCategory(newState);
    }
    const addThresholds = () => {
        setThresholds(prevState => {
            const newState = [...prevState];
            newState.push([]);
            return newState;
        });
        setThresholdsModal(prevState => {
            const newState = [...prevState];
            newState.push(null);
            return newState;
        });
    };

        // const handleScroll = debounce(() => {
        //     console.log(visibleList)
        //     // if(visibleList.includes(true)){
        //     //     console.log("GGG");
        //     //     //setVisibleList(visibleList.map(() => false));
        //     // }
        //     setVisibleList(visibleList.map((item) => item.map((subItem) => subItem === 3 ? 3 : 1)));
        //     console.log(visibleList.map((item) => item.map((subItem) => subItem === null ? null : false)))
        //     }, 50);


        useEffect(() => {
            if(!isOKEventListener){
                console.log("add2");
                setIsOKEventListener(true);
                // window.addEventListener('scroll', handleScroll);
            }
        },[isOKEventListener]);

  return (
    <div className="w-full flex justify-center items-center">
        <div className="lg:w-[375px] w-full h-full bg-[#FFF8EE] border-r-[1px] border-l-[1px] border-[#000]">
          <Header />
          <main className="flex flex-col gap-8 pt-44 pb-36 pr-3 pl-3">
            <section className="flex flex-col gap-4">
                <Caution cautionText="オークション作成に必要な情報を記入してください" />
                <div className="">
                    <ul onClick={() => {clickVisibleListState(0,0)}} className="flex justify-start items-center gap-4 h-16 overflow-hidden">
                        <li className="h-full flex flex-col justify-center items-center aspect-[1/1] bg-[#FF0054] rounded-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19.218" height="19.217" viewBox="0 0 19.218 19.217">
                                <g id="camera" transform="translate(1 1)">
                                    <g id="グループ_227" data-name="グループ 227" transform="translate(0 0)">
                                        <path id="パス_218" data-name="パス 218" d="M5.644,5.3l.383-1.916A1.722,1.722,0,0,1,7.716,2H13.5A1.722,1.722,0,0,1,15.19,3.384L15.573,5.3a1.618,1.618,0,0,0,1.194,1.252,3.235,3.235,0,0,1,2.45,3.139v6.083a3.443,3.443,0,0,1-3.443,3.443H5.443A3.443,3.443,0,0,1,2,15.774V9.691A3.235,3.235,0,0,1,4.45,6.552,1.618,1.618,0,0,0,5.644,5.3Z" transform="translate(-2 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                        <circle id="楕円形_3" data-name="楕円形 3" cx="2.87" cy="2.87" r="2.87" transform="translate(5.739 7.652)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                        <path id="パス_219" data-name="パス 219" d="M11,6h1.435" transform="translate(-3.109 -2.557)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                    </g>
                                </g>
                            </svg>
                        </li>
                        <li className="h-full aspect-[1/1] bg-[#CCCCCC] rounded-3xl"></li>
                        <li className="h-full aspect-[1/1] bg-[#CCCCCC] rounded-3xl"></li>
                        <li className="h-full aspect-[1/1] bg-[#CCCCCC] rounded-3xl"></li>
                        <li className="h-full aspect-[1/1] bg-[#CCCCCC] rounded-3xl"></li>
                    </ul>
                    <SelectBox visible={visibleList[0][0]}/>
                </div>
            </section>
            <section className="">
                <ul className="flex flex-col gap-4">
                    <li className="flex flex-col gap-2">
                        <label htmlFor="productTitle" className="block font-bold text-xs">商品名</label>
                        <input type="text" name="productTitle" placeholder="商品名" className="w-full border-[1px] border-[#FF0054] rounded p-2 bg-[#FFF8EE]" />
                    </li>
                    <li className="flex flex-col gap-2 relative">
                        <label htmlFor="productTitle" className="block font-bold text-xs">商品カテゴリ</label>
                        <div onClick={() => {openSelectorCategory()}}
                             className="group flex justify-center items-center gap-2 w-full border-[1px] border-[#FF0054] rounded p-2 bg-[#FFF8EE] transition-all hover:bg-[#FF0054] hover:text-white" >
                                <span className="flex justify-center items-center">
                                    <svg className="fill-[#FF0054] group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <g id="plus" transform="translate(-1.5 -1.5)">
                                            <path id="パス_223" data-name="パス 223" d="M9.5,1.5a8,8,0,1,0,8,8A8,8,0,0,0,9.5,1.5Zm3.969,8.736H10.235V13.47a.735.735,0,1,1-1.47,0V10.235H5.531a.734.734,0,1,1,0-1.467H8.765V5.532a.735.735,0,1,1,1.47,0V8.767h3.234a.735.735,0,1,1,0,1.469Z"  fill-rule="evenodd"/>
                                        </g>
                                    </svg>
                                </span>
                                <p className="font-medium text-xs">
                                    選択してください
                                </p>
                            </div>
                        {selectedCategory.map((item,index) => (
                            <>
                            <SelectItem thisIndex={index} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} checkOpenNum={selectedCategory[index][0]} className="absolute top-0 right-2" option={["映画","qqq","チケット","ggg","eee","fff","ggg","hhh"]} optionChild={[["ロッキー","ウルフオブウォールストリート","マトリックス"],["aaa","bbb","ccc"],["ddd","eee","fff"],["ggg","hhh","iii","jjj"],["kkk","lll","mmm","ooo","ppp"],["qqq","rrr"],["sss","ttt","uuu"],["www"]]} />
                            </>
                        ))}
                    </li>
                    <li className="flex flex-col gap-2">
                        <label htmlFor="productTitle" className="block font-bold text-xs">商品名</label>
                        <textarea name="productTitle" placeholder="商品名" className="w-full field-sizing-content border-[1px] border-[#FF0054] rounded p-2 bg-[#FFF8EE]" />
                    </li>
                </ul>
            </section>
            <section className="flex flex-col gap-4">
                <Caution cautionText="商品及び、特典を受け取るために必要な情報を選択してください" />
                <div onClick={() => {clickVisibleListState(1,0)}} className="">
                    <div className="group flex cursor-pointer justify-end gap-1 w-full items-center ">
                        <span className="w-3 h-3 flex justify-center items-center">
                            <svg className="group-hover:fill-[#4ACDB8] fill-[#FF0054] w-full h-full transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <g id="question" transform="translate(-1.1 -1.099)">
                                    <path id="パス_256" data-name="パス 256" d="M11.1,1.1a10,10,0,1,0,10,10,10,10,0,0,0-10-10Zm.914,15.76H10.15V15.074h1.863V16.86Zm0-3.693v.59H10.15V13.03c0-2.195,2.5-2.543,2.5-4.1A1.349,1.349,0,0,0,11.18,7.672a2.892,2.892,0,0,0-1.62.636L8.5,6.989A4.145,4.145,0,0,1,11.346,5.9a3.024,3.024,0,0,1,3.3,2.846c0,2.5-2.633,2.787-2.633,4.422Z" />
                                </g>
                            </svg>
                        </span>
                        <p className="text-[10px] group-hover:text-[#4ACDB8] transition-colors">商品及び、特典を受け取るために必要な情報とは？</p>
                    </div>
                    <QAmodal className={`${visibleList[1][0]=== 3 ? "hidden" : visibleList[1][0]=== 2 ? "popin-selectBox" : "fade-out opacity-0 pointer-events-none"} `} questionTitle="商品及び、特典を受け取るために必要な情報とは？" questionText={["落札者が商品及び特典を受け取るにあたって、出品者に提供しなければならない情報を指します。","住所や電話番号、出品者の運営するサロンの会員番号などなんでもOKです:)"]} questionImage="https://elements-resized.envatousercontent.com/elements-video-cover-images/d52da14a-a65e-46bf-8fc9-677acb58a4e3/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=e9e16f784a16f995c39a9b96c0e2b635647e15dd4778b91673a64be3a200f2ef" />
                </div>
                <ul className="grid grid-cols-3 grid-rows-[auto] gap-2">
                    <li onClick={() => {clickListState(0)}} className={`group w-full h-auto flex flex-col items-center gap-1 border-[1px] border-[#FF0054] rounded-lg p-3 transition-colors hover:bg-[#FF0054] hover:text-white ${clickedList[0] ? "bg-[#FF0054] text-white" : ""}`}>
                        <div className="h-6">
                            <IconSvg imgName="adress" colorWhite={clickedList[0]} className="group-hover:fill-white" />
                        </div>
                        <h3 className="font-bold text-xs">住所</h3>
                        <p className="font-medium text-[8px]">商品発送のため</p>
                    </li>
                    <li onClick={() => {clickListState(1)}} className={`group w-full h-auto flex flex-col items-center gap-1 border-[1px] border-[#FF0054] rounded-lg p-3 transition-colors hover:bg-[#FF0054] hover:text-white ${clickedList[1] ? "bg-[#FF0054] text-white" : ""}`}>
                        <div className="h-6">
                            <IconSvg imgName="postalCode" colorWhite={clickedList[1]} className="group-hover:fill-white" />
                        </div>
                        <h3 className="font-bold text-xs">郵便番号</h3>
                        <p className="font-medium text-[8px]">商品発送のため</p>
                    </li>
                    <li onClick={() => {clickListState(2)}} className={`group w-full h-auto flex flex-col items-center gap-1 border-[1px] border-[#FF0054] rounded-lg p-3 transition-colors hover:bg-[#FF0054] hover:text-white ${clickedList[2] ? "bg-[#FF0054] text-white" : ""}`}>
                        <div className="h-6">
                            <IconSvg imgName="adress" colorWhite={clickedList[2]} className="group-hover:fill-white" />
                        </div>
                        <h3 className="font-bold text-xs">住所</h3>
                        <p className="font-medium text-[8px]">商品発送のため</p>
                    </li>
                    <li onClick={() => {clickListState(3)}} className={`group w-full h-auto flex flex-col items-center gap-1 border-[1px] border-[#FF0054] rounded-lg p-3 transition-colors hover:bg-[#FF0054] hover:text-white ${clickedList[3] ? "bg-[#FF0054] text-white" : ""}`}>
                        <div className="h-6">
                            <IconSvg imgName="adress" colorWhite={clickedList[3]} className="group-hover:fill-white" />
                        </div>
                        <h3 className="font-bold text-xs">住所</h3>
                        <p className="font-medium text-[8px]">商品発送のため</p>
                    </li>
                    <li onClick={() => {clickListState(4)}} className={`group w-full h-auto flex flex-col items-center gap-1 border-[1px] border-[#FF0054] rounded-lg p-3 transition-colors hover:bg-[#FF0054] hover:text-white ${clickedList[4] ? "bg-[#FF0054] text-white" : ""}`}>
                        <div className="h-6">
                            <IconSvg imgName="postalCode" colorWhite={clickedList[4]} className="group-hover:fill-white" />
                        </div>
                        <h3 className="font-bold text-xs">郵便番号</h3>
                        <p className="font-medium text-[8px]">商品発送のため</p>
                    </li>
                    <li onClick={() => {clickListState(5)}} className={`group w-full h-auto flex flex-col items-center gap-1 border-[1px] border-[#FF0054] rounded-lg p-3 transition-colors hover:bg-[#FF0054] hover:text-white ${clickedList[5] ? "bg-[#FF0054] text-white" : ""}`}>
                        <div className="h-6">
                            <IconSvg imgName="adress" colorWhite={clickedList[5]} className="group-hover:fill-white" />
                        </div>
                        <h3 className="font-bold text-xs">住所</h3>
                        <p className="font-medium text-[8px]">商品発送のため</p>
                    </li>
                    <li onClick={() => {clickListState(6)}} className={`group w-full h-auto flex flex-col items-center gap-1 border-[1px] border-[#FF0054] rounded-lg p-3 transition-colors hover:bg-[#FF0054] hover:text-white ${clickedList[6] ? "bg-[#FF0054] text-white" : ""}`}>
                        <div className="h-6">
                            <IconSvg imgName="additionalItems" colorWhite={clickedList[6]} className="group-hover:fill-white" />
                        </div>
                        <h3 className="font-bold text-xs">その他</h3>
                        <p className="font-medium text-[8px]">商品発送のため</p>
                    </li>
                </ul>
            </section>
            <section className="relative">
                <div className="">
                    <div className="relative flex flex-col gap-1 w-11/12 h-64 bg-[#FF0054] rounded-t-xl rounded-br-xl pl-3 pt-4 pr-2">
                        <h3 className="flex items-center gap-3">
                            <span className="w-7 h-7 ">
                                <svg className="w-full h-full" id="exclamation-circle-fill" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                                    <g id="グループ_183" data-name="グループ 183">
                                        <path id="パス_185" data-name="パス 185" d="M29,14.5A14.5,14.5,0,1,1,14.5,0,14.5,14.5,0,0,1,29,14.5ZM14.5,7.25a1.64,1.64,0,0,0-1.631,1.8L13.5,15.41a1,1,0,0,0,1.994,0l.634-6.356A1.64,1.64,0,0,0,14.5,7.25Zm0,10.875a1.813,1.813,0,1,0,1.813,1.813A1.813,1.813,0,0,0,14.5,18.125Z" transform="translate(0 0)" fill="#fff"/>
                                    </g>
                                </svg>
                            </span>
                            <p className="font-bold text-white text-base">
                                落札特典を設定してください
                            </p>
                        </h3>
                        <p className="flex justify-end font-bold text-white text-xs">
                            落札特典とは？
                        </p>
                    </div>
                    <span className="w-full">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="33" height="29" viewBox="0 0 33 29">
                            <g id="マスクグループ_17" data-name="マスクグループ 17" transform="translate(-24 -398.849)" >
                                <path id="パス_220" data-name="パス 220" d="M25.15,0,41.661,28.651,0,14.52Z" transform="translate(11.425 419.886) rotate(-60)" fill="#ff0054"/>
                            </g>
                        </svg>
                    </span>
                </div>
                <ul className="relative -top-48 -mb-48 flex flex-col w-full gap-4 pl-9">
                    {thresholds.map((item,index) => {
                        return(
                            <li key={index} className="fade-in relative overflow-hidden">
                                <ul className="flex flex-col gap-3 w-full pt-6 pr-6 pb-10 pl-6 border-[1px] border-[#FACFC5] bg-[#FFE9D9] rounded shadow-custom">
                                    <li className="flex flex-col gap-2 z-10">
                                        <label htmlFor="" className="block font-bold text-xs">落札額</label>
                                        <div className="w-full relative">
                                            <input value={thresholds[index][0]} type="text" placeholder="落札額" className="w-full border-[1px] border-[#FF0054] rounded p-2 bg-[#FFF8EE]" onChange={(e) => inputThresholdsText(e.target.value, index,0)}/>
                                            <span className="text-[10px] absolute block top-1/2 right-0 pr-2">円以上での落札の場合</span>
                                        </div>
                                    </li>
                                    <li className="flex flex-col gap-2 z-10">
                                        <label htmlFor="" className="block font-bold text-xs">特典タイトル</label>
                                        <input value={thresholds[index][1]} type="text" placeholder="特典タイトル" className="w-full border-[1px] border-[#FF0054] rounded p-2 bg-[#FFF8EE]" onChange={(e) => inputThresholdsText(e.target.value, index,1)} />
                                    </li>
                                    <li className="flex flex-col gap-2 z-10">
                                        <label htmlFor="productTitle" className="block font-bold text-xs">特典情報</label>
                                        <textarea value={thresholds[index][2]} name="productTitle" placeholder="商品名" className="w-full field-sizing-content border-[1px] border-[#FF0054] rounded p-2 bg-[#FFF8EE]" onChange={(e) => inputThresholdsText(e.target.value, index,2)} />
                                    </li>
                                    <li className="w-full z-10">
                                        <button className="group w-full flex justify-center items-center gap-2 border-[1px] border-[#FF0054] rounded p-2 bg-[#FFF8EE] text-xs hover:bg-[#FF0054] hover:text-white transition-colors">
                                            <span className=" flex justify-center items-center w-4 h-4">
                                                <svg className="stroke-[#FF0054] group-hover:stroke-white w-full h-full" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                    <g id="camera" transform="translate(1 1)">
                                                        <g id="グループ_227" data-name="グループ 227" transform="translate(0)">
                                                        <path id="パス_218" data-name="パス 218" d="M5.386,5.067l.356-1.781A1.6,1.6,0,0,1,7.312,2h5.376a1.6,1.6,0,0,1,1.57,1.286l.356,1.781a1.5,1.5,0,0,0,1.11,1.163A3.006,3.006,0,0,1,18,9.147V14.8A3.2,3.2,0,0,1,14.8,18H5.2A3.2,3.2,0,0,1,2,14.8V9.147A3.006,3.006,0,0,1,4.277,6.23,1.5,1.5,0,0,0,5.386,5.067Z" transform="translate(-2 -2)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                        <circle id="楕円形_3" data-name="楕円形 3" cx="2.87" cy="2.87" r="2.87" transform="translate(5.13 6.841)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                        <path id="パス_219" data-name="パス 219" d="M11,6h1.435" transform="translate(-3.717 -2.8)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                            画像を追加する
                                        </button>
                                    </li>
                                    <li onClick={() => (clickVisibleListState(2,index))} className="w-full z-10">
                                        <button className="group w-full flex justify-center items-center gap-2 rounded p-2 text-xs bg-[#4B0019] hover:bg-[#FF0054] text-white hover:text-white transition-colors">
                                            <span className=" flex justify-center items-center w-4 h-4">
                                                <svg className="fill-white w-full h-full" xmlns="http://www.w3.org/2000/svg" width="13.5" height="16.75" viewBox="0 0 13.5 16.75">
                                                    <g id="trash" transform="translate(-5.25 -3.25)">
                                                        <path id="パス_253" data-name="パス 253" d="M5.25,6.909A.75.75,0,0,1,6,6.159H18a.75.75,0,0,1,0,1.5H6A.75.75,0,0,1,5.25,6.909Z"  fill-rule="evenodd"/>
                                                        <path id="パス_254" data-name="パス 254" d="M11.333,4.75A1.25,1.25,0,0,0,10.083,6v.909h-1.5V6a2.75,2.75,0,0,1,2.75-2.75h1.333A2.75,2.75,0,0,1,15.417,6v.909h-1.5V6a1.25,1.25,0,0,0-1.25-1.25Z"  fill-rule="evenodd"/>
                                                        <path id="パス_255" data-name="パス 255" d="M6,6.909,8,20h8L18,6.909Zm6.5,3.636a.5.5,0,0,0-1,0v5.818a.5.5,0,0,0,1,0Zm-3.224-.5a.476.476,0,0,1,.549.423l.667,5.818a.525.525,0,0,1-.435.575.477.477,0,0,1-.549-.423l-.667-5.818A.525.525,0,0,1,9.276,10.047Zm5.882.575a.525.525,0,0,0-.435-.575.476.476,0,0,0-.549.423l-.667,5.818a.525.525,0,0,0,.435.575.476.476,0,0,0,.549-.423Z"  fill-rule="evenodd"/>
                                                    </g>
                                                </svg>
                                            </span>
                                            この落札特典を削除する
                                        </button>
                                    </li>
                                </ul>
                                <aside className= {`text-white text-xs pl-9 absolute top-1/2 translate-y-[-50%] z-20 ${visibleList[2][index] == 2 && "slide-in "} ${visibleList[2][index] == 1 && "slide-out translate-x-full"} ${visibleList[2][index]===3 && "hidden"}`}>
                                    <div className="flex flex-col gap-3 pt-6 pr-3 pb-6 pl-9 bg-[#FF0054] rounded-l-full">
                                        <div className="flex gap-2">
                                            <span className="w-4 h-4 flex items-center">
                                                <svg className="w-full h-full" id="exclamation-circle-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                                    <g id="グループ_183" data-name="グループ 183">
                                                        <path id="パス_185" data-name="パス 185" d="M16,8A8,8,0,1,1,8,0a8,8,0,0,1,8,8ZM8,4A.9.9,0,0,0,7.1,5L7.45,8.5a.552.552,0,0,0,1.1,0L8.9,5A.9.9,0,0,0,8,4Zm0,6a1,1,0,1,0,1,1A1,1,0,0,0,8,10Z" transform="translate(0 0)" fill="#fff"/>
                                                    </g>
                                                </svg>
                                            </span>
                                            <h4 className="flexitems-center gap-2 text-xs font-bold">
                                                CAUTION
                                            </h4>
                                        </div>
                                        <p className="font-bold">
                                            この落札特典を削除してもよろしいでしょうか？
                                        </p>
                                        <div className="flex gap-3">
                                            <button  className="w-full bg-white rounded-full text-[#FF0054] font-bold pt-1 pb-1">
                                                削除する
                                            </button>
                                            <button onClick={()=>{
                                                clickVisibleListState(2,index)}} className="w-full bg-[#FF0054] rounded-full text-white font-bold pt-1 pb-1">
                                                キャンセル
                                            </button>
                                        </div>
                                    </div>
                                </aside>
                            </li>
                        );
                    })}
                    <li className="">
                        <button className="group w-full flex justify-center items-center gap-2 border-[1px] border-[#FF0054] rounded p-2 bg-[#FFF8EE] text-xs hover:bg-[#FF0054] hover:text-white transition-colors" onClick={addThresholds}>
                            <span className=" flex justify-center items-center w-4 h-4">
                                <svg className="fill-[#FF0054] group-hover:fill-white w-full h-full" id="plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path id="パス_223" data-name="パス 223" d="M9.5,1.5a8,8,0,1,0,8,8A8,8,0,0,0,9.5,1.5Zm3.969,8.736H10.235V13.47a.735.735,0,1,1-1.47,0V10.235H5.531a.734.734,0,1,1,0-1.467H8.765V5.532a.735.735,0,1,1,1.47,0V8.767h3.234a.735.735,0,1,1,0,1.469Z" transform="translate(-1.5 -1.5)" fill-rule="evenodd"/>
                                </svg>
                            </span>
                            さらに落札特典を追加する
                        </button>
                    </li>
                </ul>
            </section>
          </main>
          <Nav home={true} />
        </div>
    </div>
  );
}
