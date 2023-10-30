import { ProductDetail } from "../models/product_detail";

export class CartSession {
    id?:number;
    quantity?: number;
    productDetailId?: number;
    isCheck?:boolean;
    savePrice?:number;
    thumbnail: string;
    size:number;
    name:string;
    salePrice:number;

    constructor() {
        this.id= 0;
        this.quantity = 0;
        this.productDetailId = 0;
        this.isCheck = true;
        this.savePrice = 0;
    }

}