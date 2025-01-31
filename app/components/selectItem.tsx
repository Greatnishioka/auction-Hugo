import { SetState } from "~/types/type";
import BgDeco from "../../public/img/bg-dec.png";
type props = {
    thisIndex:number;
    option:string[]
    optionChild:string[][]
    className?:string;
    selectedCategory:number[][];
    checkOpenNum:number;
    setSelectedCategory:SetState<number[][]>;
}

export default function SelectItem({thisIndex,option,className,optionChild,selectedCategory,checkOpenNum,setSelectedCategory}: props) {

    const clickCategory = (arrayIndex:number,arrayIndex2:number,index:number) => {
        
        const newArray = [...selectedCategory];
        newArray[arrayIndex][arrayIndex2] = index;
        console.log(newArray);
        setSelectedCategory(newArray);

        if(arrayIndex2 === 1){
            //setSelectedCategory(newArray);
        }
    }

    return (
        <aside className={`${checkOpenNum === undefined ? "hidden" : checkOpenNum !== -1 && ""}  popin-selectBox  relative w-full h-full -top-16 left-0 z-10`}>
            <div className={`${className} w-[173px]` }>
                <ul className="absolute flex flex-col justify-center items-center w-36 border-[1px] border-[#FF0054] bg-[#FFF8EE] rounded-2xl z-10">
                    {option.map((item,index) => {
                        const randomX = Math.floor(Math.random() * 79);
                    return( 
                        <li key={index} onClick={()=>{clickCategory(thisIndex,0,index)}} className="group hover:z-20 relative flex items-center w-40 border-b-[1px] last:border-none border-[#FF0054]">
                            <div className={`mr-2 ml-2 pt-2 pb-2 w-36 flex items-center justify-center group-hover:bg-[#FF0054] group-hover:text-white ${index === 0 && "rounded-t-2xl"} ${index === option.length-1 && "rounded-b-2xl"} font-light`}>
                                {item}
                            </div>
                            {randomX >59 &&
                            <>
                                <span style={{left:`${randomX}%`}} className="flex group-hover:hidden gap-1 absolute -top-[1px]  before:bg-[#FFF8EE] after:bg-[#FFF8EE] after:w-1 after:h-1 before:w-1 before:h-1 before:block after:block">
                                    <div className="bg-[#FFF8EE] w-4 h-1"></div>
                                </span>
                            </>}
                            {randomX >0 && randomX < 60 &&
                            <>
                                <span style={{left:`${randomX}%`}} className="flex group-hover:hidden gap-3 absolute -top-[1px]  before:bg-[#FFF8EE] after:bg-[#FFF8EE] after:w-1 after:h-1 before:w-1 before:h-1 before:block after:block">
                                    <div className="w-1 h-1 rounded-full -top-2"></div>
                                    <div className="bg-[#FFF8EE] w-4 h-1"></div>
                                </span>
                            </>}

                        </li>
                    )})}
                </ul>
                <div className="absolute -top-4 w-fit z-0">
                    <img src={BgDeco} alt="" className="" />
                </div>
                <div className="absolute -top-4 w-full h-full z-20 bg-[#00000048]">
                </div>
                {selectedCategory[thisIndex][0] !== -1 &&
                <>
                    <ul className="absolute top-24 -left-32 flex flex-col justify-center items-center w-36 border-[1px] border-[#FF0054] bg-[#FFF8EE] rounded-2xl z-10 popin-selectBox">
                    {selectedCategory[thisIndex][0] !== -1 && selectedCategory[thisIndex][0] !== undefined && optionChild[selectedCategory[thisIndex][0]].map((item,index) => {
                            const randomX = Math.floor(Math.random() * 79);
                        return(
                            <li key={index} onClick={()=>{clickCategory(thisIndex,1,index)}} className="group hover:z-20 relative flex items-center w-40 border-b-[1px] last:border-none border-[#FF0054]">
                                <div className={`mr-2 ml-2 pt-2 pb-2 w-36 flex items-center justify-center group-hover:bg-[#FF0054] group-hover:text-white ${index === 0 && "rounded-t-2xl"} ${index === optionChild.length-1 && "rounded-b-2xl"} font-light`}>
                                    {item}
                                </div>
                                {randomX >59 &&
                                <>
                                    <span style={{left:`${randomX}%`}} className="flex group-hover:hidden gap-1 absolute -top-[1px]  before:bg-[#FFF8EE] after:bg-[#FFF8EE] after:w-1 after:h-1 before:w-1 before:h-1 before:block after:block">
                                        <div className="bg-[#FFF8EE] w-4 h-1"></div>
                                    </span>
                                </>}
                                {randomX >39 && randomX < 60 &&
                                <>
                                    <span style={{left:`${randomX}%`}} className="flex group-hover:hidden gap-3 absolute -top-[1px]  before:bg-[#FFF8EE] after:bg-[#FFF8EE] after:w-1 after:h-1 before:w-1 before:h-1 before:block after:block">
                                        <div className="w-1 h-1 rounded-full -top-2"></div>
                                        <div className="bg-[#FFF8EE] w-4 h-1"></div>
                                    </span>
                                </>}
                            </li>
                        )
                    })}
                </ul>
                </>
                }
            </div>
        </aside>
  );
}