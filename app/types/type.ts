import { d } from "node_modules/vite/dist/node/types.d-aGj9QkWt";

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type products = {
    product_id:number,
    product_title:string, 
    product_image_url:string, 
    product_price:number, 
    product_openprice:number, 
    product_tags:tags, 
    product_text:product_text, 
    product_thresholds:thresholds,
    product_sold_status:number,
    created_at:Date,
};

type tags = {
    tags:string[],
};

type product_text = {
    product_text:string[],
}
type thresholds = {
    product_thresholds: threshold[]; // threshold配列を保持
};

type threshold = {
    
    threshold_price: number; // 金額
    threshold_img_src: string; // イメージURL
    threshold_title: string; // タイトル
    threshold_context: string; // 説明テキスト
    threshold_status: string; // ステータス
};
