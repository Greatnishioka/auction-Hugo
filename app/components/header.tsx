import { useEffect,useState } from 'react';
import { debounce } from '~/hooks/functions';
import Bell from './bell';
type props = {

}

export default function Header({}: props) {

    let prevY = 0;
    const [isOKEventListener, setIsOKEventListener] = useState<boolean>(false);
    const [hidden, setHidden] = useState<boolean>(true);
    
    //デバウンス関数を試験的に実装。めちゃいい感じ
    const handleScroll = debounce(() => {
        const currentY = window.scrollY;

        // 上にスクロールしている場合
        if (currentY < 100) { 
          setHidden(false); 
        } else { 
        // 下にスクロールしている場合
          if (currentY > 0) {
            setHidden(true);
          }
        }
        prevY = currentY;
      }, 25); 
    

    useEffect(() => {
        if(!isOKEventListener){
            setIsOKEventListener(true);
            window.addEventListener('scroll', handleScroll);
        }
          // クリーンアップ関数を追加
        //   return () => {
        //     window.removeEventListener('scroll', handleScroll);
        //   };
    },[prevY]);
    

  return (
    <header className={`fixed lg:w-[375px] ${hidden ? "top-[-50px]" : "top-0"} transition-all  w-full z-40 pr-3 pl-3`}>
        <ul onClick={() => {setHidden(!hidden)}} className="top-0 w-full flex flex-col">
            <li className="absolute float-left top-0 z-40">
                <svg className="" xmlns="http://www.w3.org/2000/svg" width="275.25" height="150.602" viewBox="0 0 275.25 150.602">
                    <path id="パス_9" data-name="パス 9" d="M2704.5-1020.082s47.1-64.791,162.836-83.5,112.4-67.1,112.4-67.1H2704.5Z" transform="translate(-2704.498 1170.683)" fill="#ff0054"/>
                </svg>
            </li>
            <li className="w-full top-0 z-30">
                <svg className="float-right" xmlns="http://www.w3.org/2000/svg" width="268.792" height="150.602" viewBox="0 0 268.792 150.602">
                    <path id="パス_2" data-name="パス 2" d="M2973.5-1020.082s-26.072-34.409-143.529-53.12-125.263-97.482-125.263-97.482H2973.5Z" transform="translate(-2704.706 1170.683)" fill="#ff5400"/>
                </svg>
            </li>
            <li className="absolute top-0 float-left z-20">
                <svg className="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="351" height="142" viewBox="0 0 351 142">
                    <defs>
                        <clipPath id="clip-path">
                        <rect id="長方形_10" data-name="長方形 10" width="351" height="142" transform="translate(12 70)" fill="#fff" stroke="#707070" strokeWidth="1"/>
                        </clipPath>
                    </defs>
                    <g id="マスクグループ_4" data-name="マスクグループ 4" transform="translate(-12 -70)" clipPath="url(#clip-path)">
                        <path id="パス_4" data-name="パス 4" d="M2702-1036.414v142.681c137.6,79.446,351.03-30.143,351.03-30.143v-112.182Z" transform="translate(-2690 1038)" fill="#ff9d00"/>
                    </g>
                </svg>
            </li>
        </ul>
        <div className="absolute top-0 flex items-center justify-between w-full pt-6 pl-[10px] pr-[40px] z-40">
            <svg className="float-left" xmlns="http://www.w3.org/2000/svg" width="49" height="24" viewBox="0 0 49 24">
                <text id="HUGO" transform="translate(0 19)" fill="#fff" fontSize="16" fontFamily="NotoSansCJKjp-Black, Noto Sans CJK JP" fontWeight="800"><tspan x="0" y="0">HUGO</tspan></text>
            </svg>
            <div className="w-full ">
                <svg className="float-right" xmlns="http://www.w3.org/2000/svg" width="25.862" height="23" viewBox="0 0 25.862 23">
                    <g id="グループ_21" data-name="グループ 21" transform="translate(-300.5 -94)">
                        <line id="線_4" data-name="線 4" x2="25.862" transform="translate(300.5 116.5)" fill="none" stroke="#fff" strokeWidth="1"/>
                        <line id="線_3" data-name="線 3" x2="25.862" transform="translate(300.5 105.5)" fill="none" stroke="#fff" strokeWidth="1"/>
                        <line id="線_2" data-name="線 2" x2="25.862" transform="translate(300.5 94.5)" fill="none" stroke="#fff" strokeWidth="1"/>
                    </g>
                </svg>
            </div>
        </div>
        <Bell notificationsCount={23}/>
    </header>
  );
}


