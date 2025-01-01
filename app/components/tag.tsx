
type props = {
  tag:string[]
  colorRed?:boolean
}

export default function BrowsingHistory({tag,colorRed}: props) {
  return (
    <div className={`w-fit flex items-center gap-2 pt-[2px] pr-1 pb-[2px] pl-1 ${colorRed ? "bg-[#FF0054] text-white" : "bg-white "} font-Noto text-[8px]`}>
        <span className="w-3 h-3 flex items-center justify-center">
        {tag && tag[0] === "person" && (
            <>
                <svg className="h-3"  xmlns="http://www.w3.org/2000/svg" width="12" height="13.717" viewBox="0 0 12 13.717">
                    <g id="person" transform="translate(-0.382 -1.774)">
                        <path id="パス_18" data-name="パス 18" d="M12.382,12.333v1.895a1.266,1.266,0,0,1-1.263,1.263H1.645A1.266,1.266,0,0,1,.382,14.227V12.333A3.167,3.167,0,0,1,3.54,9.175H9.224A3.167,3.167,0,0,1,12.382,12.333ZM3.155,5A3.227,3.227,0,1,1,6.382,8.227,3.227,3.227,0,0,1,3.155,5Z" transform="translate(0 0)" fill={colorRed ? "#fff" : "#ff0054"}/>
                    </g>
                </svg>
            </>
        )}
        {tag && tag[0] === "ticket" && (
        <>
            <svg className="h-3" xmlns="http://www.w3.org/2000/svg" width="12" height="12.647" viewBox="0 0 12 12.647">
                <g id="tag" transform="translate(-0.307)">
                    <path id="パス_19" data-name="パス 19" d="M.307,4.643V.977A1.015,1.015,0,0,1,1.284,0H4.95A2.556,2.556,0,0,1,6.622.694l5.426,6.04a1.059,1.059,0,0,1,0,1.389L7.8,12.371a1.009,1.009,0,0,1-1.389,0L1,6.314A2.777,2.777,0,0,1,.307,4.643ZM1.9,2.527a.967.967,0,0,0,.937.945.973.973,0,0,0,.945-.945.967.967,0,0,0-.945-.937.961.961,0,0,0-.937.937Z" fill={colorRed ? "#fff" : "#ff0054"}/>
                </g>
            </svg>
        </>
        )}
        </span>
    {tag[1]}
    </div>
  );
}