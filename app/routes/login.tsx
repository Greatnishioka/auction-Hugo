import '@splidejs/react-splide/css';
import { useState } from "react";


export default function Index() {

    const [token, setToken] = useState<string | null>(null);
    // 今はパスワードもユーザーidもないので、とりあえずログインボタンを押すとログインするようにしておく。
    const login = async () => {
        try {
            const response = await fetch("http://localhost:1234/api/v1/auth/login", { 
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setToken(data.token_data.token);
        } catch (error) {
            console.error("Failed to fetch:", error);
        }
    };
    return (
        <div className="w-full flex justify-center items-center">
            <div className="" onClick={login}>
                ログイン！
            </div>
            <p className="">
                {token}
            </p>
        </div>
    );
}