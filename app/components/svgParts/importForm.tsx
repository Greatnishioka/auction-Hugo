type props = {
    imgName?:string
    colorWhite?:boolean
    className?:string
};

export default function importForm({imgName,colorWhite,className}: props) {
    return(
        <>
        {imgName === "adress" && 
            <svg className={`${colorWhite ? "fill-white fill-change" : "fill-[#FF0054]"} ${className} w-full h-full`}  id="signpost_linear" xmlns="http://www.w3.org/2000/svg" width="17.28" height="24" viewBox="0 0 17.28 24">
                <path id="パス_186" data-name="パス 186" d="M5.641,1.236A2.791,2.791,0,0,1,7.37.625h9.22a2.811,2.811,0,0,1,2.791,2.834V7.442a2.813,2.813,0,0,1-2.791,2.845H7.37a2.748,2.748,0,0,1-1.741-.62L3.188,7.678h0a2.871,2.871,0,0,1,0-4.443h0ZM6.67,2.583,4.23,4.571a1.142,1.142,0,0,0,0,1.771h0L6.676,8.335l0,0a1.094,1.094,0,0,0,.691.243h9.22a1.122,1.122,0,0,0,1.116-1.138V3.459A1.12,1.12,0,0,0,16.59,2.332H7.37A1.137,1.137,0,0,0,6.67,2.583Z" transform="translate(-2.135 -0.625)"  fill-rule="evenodd"/>
                <path id="パス_187" data-name="パス 187" d="M4.941,7.332A1.12,1.12,0,0,0,3.824,8.459v3.983a1.122,1.122,0,0,0,1.116,1.138h9.22a1.094,1.094,0,0,0,.691-.243l0,0h0L17.3,11.343h0a1.142,1.142,0,0,0,0-1.771h0L14.86,7.583a1.136,1.136,0,0,0-.7-.25ZM2.15,8.459A2.811,2.811,0,0,1,4.941,5.625h9.22a2.792,2.792,0,0,1,1.729.611l.01.008h0l2.443,1.991h0a2.87,2.87,0,0,1,0,4.441h0L15.9,14.666h0a2.748,2.748,0,0,1-1.741.62H4.941A2.813,2.813,0,0,1,2.15,12.442Z" transform="translate(-2.116 5.286)"  fill-rule="evenodd"/>
                <path id="パス_188" data-name="パス 188" d="M6.479,4.125a.854.854,0,0,1,.854.854V8.393a.854.854,0,1,1-1.707,0V4.979A.854.854,0,0,1,6.479,4.125Z" transform="translate(2.15 3.648)"  fill-rule="evenodd"/>
                <path id="パス_189" data-name="パス 189" d="M6.479,9.125a.854.854,0,0,1,.854.854v3.414a.854.854,0,1,1-1.707,0V9.979A.854.854,0,0,1,6.479,9.125Z" transform="translate(2.15 9.753)"  fill-rule="evenodd"/>
                <path id="パス_190" data-name="パス 190" d="M4.125,11.479a.879.879,0,0,1,.9-.854h7.225a.855.855,0,1,1,0,1.707H5.028A.879.879,0,0,1,4.125,11.479Z" transform="translate(-0.011 11.668)"  fill-rule="evenodd"/>
            </svg>
        }
        {imgName === "postalCode" &&
            <svg className={`${colorWhite ? "fill-white fill-change" : "fill-[#FF0054]"} ${className} w-full h-full`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="グループ_212" data-name="グループ 212" transform="translate(-7125 846)">
                <rect id="長方形_111" data-name="長方形 111" width="24" height="4" transform="translate(7125 -846)" />
                <rect id="長方形_112" data-name="長方形 112" width="24" height="4" transform="translate(7125 -838)" />
                <rect id="長方形_113" data-name="長方形 113" width="13" height="4" transform="translate(7139 -835) rotate(90)" />
                </g>
            </svg>  
        }
        {imgName === "name" &&
            <svg className={`${colorWhite ? "fill-white fill-change" : "fill-[#FF0054]"} ${className} w-full h-full`} id="dogtags" xmlns="http://www.w3.org/2000/svg" width="23.159" height="24.002" viewBox="0 0 23.159 24.002">
                <path id="パス_191" data-name="パス 191" d="M7.406,3.582a.814.814,0,1,0-.814-.814.814.814,0,0,0,.814.814" transform="translate(6.391 1.704)" />
                <path id="パス_192" data-name="パス 192" d="M17.789,20.015l-8.946.349a.409.409,0,0,1-.409-.394.4.4,0,0,1,.389-.42l8.951-.369a.4.4,0,0,1,.425.389.409.409,0,0,1-.394.425ZM8.267,16.32a.414.414,0,0,1,.394-.425l8.946-.364a.4.4,0,0,1,.425.389.409.409,0,0,1-.389.425l-8.951.364a.409.409,0,0,1-.409-.389ZM8.12,12.661a.409.409,0,0,1,.389-.425l8.946-.364a.394.394,0,0,1,.45.4.409.409,0,0,1-.389.425l-8.946.364a.4.4,0,0,1-.4-.389ZM7.968,9a.409.409,0,0,1,.389-.425l8.951-.344a.394.394,0,0,1,.425.394.409.409,0,0,1-.394.419l-8.946.369a.409.409,0,0,1-.409-.389Zm4.574-5.878a1.627,1.627,0,1,1-1.627,1.627A1.627,1.627,0,0,1,12.542,3.124Zm8.547.389a1.193,1.193,0,0,0-.713-1.051,17.72,17.72,0,0,0-15.764.718,1.324,1.324,0,0,0-.622,1.183l.829,17.29A1.2,1.2,0,0,0,5.532,22.7l.121.056a17.417,17.417,0,0,0,15.506-.632l.121-.066a1.2,1.2,0,0,0,.622-1.107Z" transform="translate(1.255 -0.279)" />
                <path id="パス_193" data-name="パス 193" d="M6.658,4.8A2.128,2.128,0,0,1,7.7,2.907,18.534,18.534,0,0,1,13.425.886a17.513,17.513,0,0,0-7.581.632,1.188,1.188,0,0,0-.829.955L2.24,19.541a1.193,1.193,0,0,0,.505,1.173l.111.081a17.341,17.341,0,0,0,5.1,2.527,2.022,2.022,0,0,1-.455-1.193Z" transform="translate(-2.225 -0.724)" />
            </svg>
        }
        {imgName === "mail" &&
            <svg className={`${colorWhite ? "fill-white fill-change" : "fill-[#FF0054]"} ${className} w-full h-full`} xmlns="http://www.w3.org/2000/svg" width="24" height="19.2" viewBox="0 0 24 19.2">
                <g id="email" transform="translate(-2 -4)">
                    <path id="パス_208" data-name="パス 208" d="M23.6,8.8l-9.6,6-9.6-6V6.4l9.6,6,9.6-6m0-2.4H4.4A2.392,2.392,0,0,0,2,6.4V20.8a2.4,2.4,0,0,0,2.4,2.4H23.6A2.4,2.4,0,0,0,26,20.8V6.4A2.4,2.4,0,0,0,23.6,4Z" />
                </g>
            </svg>
        }
        {imgName === "phone" &&
            <svg className={`${colorWhite ? "fill-white fill-change" : "fill-[#FF0054]"} ${className} w-full h-full`} xmlns="http://www.w3.org/2000/svg" width="24.001" height="23.999" viewBox="0 0 24.001 23.999">
                <g id="telephone-fill" transform="translate(0.001 -0.001)">
                    <g id="グループ_211" data-name="グループ 211">
                        <path id="パス_209" data-name="パス 209" d="M2.827.766a2.618,2.618,0,0,1,3.915.245L9.435,4.47a2.617,2.617,0,0,1,.473,2.241L9.087,10a1.017,1.017,0,0,0,.267.965l3.686,3.685a1.017,1.017,0,0,0,.966.267l3.283-.821a2.617,2.617,0,0,1,2.241.472l3.459,2.691a2.617,2.617,0,0,1,.245,3.917l-1.551,1.551a4.165,4.165,0,0,1-4.315,1.053,27.951,27.951,0,0,1-10.515-6.63A27.951,27.951,0,0,1,.222,6.633,4.17,4.17,0,0,1,1.276,2.317Z"  fill-rule="evenodd"/>
                    </g>
                </g>
            </svg>
        }
        {imgName === "additionalItems" &&
            <svg className={`${colorWhite ? "fill-white fill-change" : "fill-[#FF0054]"} ${className} w-full h-full`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="More_line" transform="translate(-2.25 -2.25)">
                    <path id="パス_204" data-name="パス 204" d="M17.793,4.506a15.512,15.512,0,0,0-7.085,0,8.322,8.322,0,0,0-6.2,6.2,15.512,15.512,0,0,0,0,7.085,8.322,8.322,0,0,0,6.2,6.2,15.512,15.512,0,0,0,7.085,0,8.321,8.321,0,0,0,6.2-6.2,15.512,15.512,0,0,0,0-7.085A8.322,8.322,0,0,0,17.793,4.506Zm-7.507-1.8a17.358,17.358,0,0,1,7.928,0,10.168,10.168,0,0,1,7.577,7.577,17.359,17.359,0,0,1,0,7.928,10.168,10.168,0,0,1-7.577,7.577,17.359,17.359,0,0,1-7.928,0,10.168,10.168,0,0,1-7.577-7.577,17.359,17.359,0,0,1,0-7.928A10.168,10.168,0,0,1,10.286,2.709Z"  fill-rule="evenodd"/>
                    <path id="パス_205" data-name="パス 205" d="M9.055,12a1.028,1.028,0,1,1-1.027-1A1.014,1.014,0,0,1,9.055,12Z" transform="translate(1.225 2.25)" />
                    <path id="パス_206" data-name="パス 206" d="M13.027,12A1.028,1.028,0,1,1,12,11,1.014,1.014,0,0,1,13.027,12Z" transform="translate(2.25 2.25)" />
                    <path id="パス_207" data-name="パス 207" d="M17,12a1.028,1.028,0,1,1-1.027-1A1.014,1.014,0,0,1,17,12Z" transform="translate(3.275 2.25)" />
                </g>
            </svg>
        }

        </>
);
};