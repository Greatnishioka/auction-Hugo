import { Link } from "@remix-run/react";
type props = {
  pages:string[][]
}

export default function BrowsingHistory({pages}: props) {
  return (
    <div className="w-full p-2 flex flex-col gap-1 rounded-lg border border-[#FF0054] overflow-hidden">
        <p className="font-Noto text-xs font-bold ">閲覧履歴</p>
        <ul className="flex gap-2">
        {pages.map((page, index) => {
              return (
                <li className="w-fit h-fit">
                <Link to={page[0]}>
                  <div className="w-12 h-12 overflow-hidden">
                    <img className="w-full h-full object-cover object-center" src={page[1]} alt="" />
                  </div>
                </Link>
              </li>
              );
          })}
        </ul>
    </div>
  );
}