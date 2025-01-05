type props = {
    className?:string
    questionTitle:string
    questionText:string[]
    questionImage:string
}

export default function QAmodal({className,questionTitle,questionText,questionImage}: props) {
    return (
        <aside className={`relative ${className}`} >
            <div className="absolute flex flex-col gap-0">
                <span className="block w-full pr-8">
                    <svg className="float-right" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="33" height="29" viewBox="0 0 33 29">
                        <g id="マスクグループ_21" data-name="マスクグループ 21">
                            <path id="パス_231" data-name="パス 231" d="M25.15,0,41.661,28.651,0,14.52Z" transform="translate(45.575 7.964) rotate(120)" fill="#ff0054"/>
                        </g>
                    </svg>
                </span>
                <div className="flex flex-col gap-2 text-white rounded-3xl bg-[#FF0054] p-3">
                    <div className="flex gap-2 ">
                        <span className="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <g id="question" transform="translate(-1.1 -1.099)">
                                    <path id="パス_256" data-name="パス 256" d="M11.1,1.1a10,10,0,1,0,10,10,10,10,0,0,0-10-10Zm.914,15.76H10.15V15.074h1.863V16.86Zm0-3.693v.59H10.15V13.03c0-2.195,2.5-2.543,2.5-4.1A1.349,1.349,0,0,0,11.18,7.672a2.892,2.892,0,0,0-1.62.636L8.5,6.989A4.145,4.145,0,0,1,11.346,5.9a3.024,3.024,0,0,1,3.3,2.846c0,2.5-2.633,2.787-2.633,4.422Z" fill="#fff"/>
                                </g>
                            </svg>
                        </span>
                        <h3 className="">
                            {questionTitle}
                        </h3>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex flex-col gap-1 text-[10px] font-medium">
                            {questionText.map((item,index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                        <div className=" p-1 rounded-[20px] bg-white">
                            <div className="rounded-[17px] aspect-square overflow-hidden">
                                <img className="w-full h-full object-cover object-center" src={questionImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
  );
}