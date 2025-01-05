type props = {
    cautionText:string
}

export default function Caution({cautionText}: props) {
    return (
    <div className="flex gap-3 bg-[#FF0054] p-3 rounded">
        <span className="w-7 h-7 flex justify-center items-center">
            <svg className="w-full h-full" id="exclamation-circle-fill" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                <g id="グループ_183" data-name="グループ 183" transform="translate(0 0)">
                    <path id="パス_185" data-name="パス 185" d="M29,14.5A14.5,14.5,0,1,1,14.5,0,14.5,14.5,0,0,1,29,14.5ZM14.5,7.25a1.64,1.64,0,0,0-1.631,1.8L13.5,15.41a1,1,0,0,0,1.994,0l.634-6.356A1.64,1.64,0,0,0,14.5,7.25Zm0,10.875a1.813,1.813,0,1,0,1.813,1.813A1.813,1.813,0,0,0,14.5,18.125Z" transform="translate(0 0)" fill="#fff"/>
                </g>
            </svg>
        </span>
        <p className="text-xs font-medium text-white">{cautionText}</p>
    </div>
    );
}