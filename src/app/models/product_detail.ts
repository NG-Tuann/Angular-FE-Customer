import { Product } from "./Product";
import { ProductPrice } from "./product_price";

export class ProductDetail {
    id: number;
    importQuantity:number;
    productPrice:ProductPrice;
    productPriceId:number;
    quantity:number;
    size:number;
    thumbnail:string;
    salePrice:number;
    name:string;
    product: Product;

    constructor() {
        this.id=0;
        this.importQuantity = 0;
        this.productPrice = null;
        this.productPriceId = 0;
        this.quantity = 0;
        this.size = 0;
        this.thumbnail = '';
        this.salePrice = 0;
        this.name = '';
    }
}