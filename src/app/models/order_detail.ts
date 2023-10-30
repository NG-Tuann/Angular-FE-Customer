import { OrderProduct } from "./order_product";
import { ProductDetail } from "./product_detail";

export class OrderDetail {
    id?:number;
    orderId?:number; 
    productDetailId?:number;
    quantity?:number; 
    salePrice?:number; 
    order: OrderProduct;
    productDetail: ProductDetail;
}