import { Customer } from "./customer";
import { ProductDetail } from "./product_detail";

export class Cart {
    id:number;
    customerId?: number;
    quantity?: number;
    orderId? : number;
    productDetailId?: number;
    isCheck:boolean;
    savePrice:number;
    customer?:Customer;
    // order?: OrderProduct;
    productDetail?:ProductDetail;

    constructor() {
        this.id = 0;
        this.customerId = 0;
        this.quantity = 0;
        this.orderId = 0;
        this.productDetailId = 0;
        this.isCheck = false;
        this.savePrice = 0;
        this.customer = null;
        this.productDetail = null;
    }

}