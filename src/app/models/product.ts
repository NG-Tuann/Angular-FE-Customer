import { CategoryProduct } from "./category_product";
import { Geomancy } from "./geomancy";
import { Images } from "./image";
import { ProductDetail } from "./product_detail";
import { ProductDiscount } from "./product_discount";
import { StoneType } from "./stone_type";

export class Product {
    id: number;
    name?:string;
    image?:string;
    color?:string;
    note?:string;
    bestSeller:boolean;
    homeFlag:boolean;
    active:boolean;
    cat: CategoryProduct;
    geomancy: Geomancy;
    mainStone: StoneType;
    subStone: StoneType;
    productDetails: ProductDetail[];
    productDiscounts: ProductDiscount[];
    images: Images[]

    constructor() {
        this.id = 0;
        this.name = '';
        this.image = '';
        this.color = '';
        this.note = '';
        this.bestSeller = false;
        this.homeFlag = false;
        this.active = false;
        this.cat = null;
        this.geomancy = null;
        this.mainStone = null;
        this.subStone = null;
        this.productDetails = null;
        this.images = null;
    }
}