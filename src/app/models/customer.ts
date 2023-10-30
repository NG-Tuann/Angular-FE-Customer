import { Cart } from "./cart";
import { CustomerType } from "./customer_type";

export class Customer {
    id:number;
    fullName?:string;
    userName:string;
    passWord:string;
    dob?:Date;
    idCard?:string;
    customerTypeId:number;
    scorePay?:number;
    address?:string;
    phone?:string;
    avatar?:string;
    customerType:CustomerType;
    carts: Cart[];


    // public virtual ICollection<PromotionDetail> PromotionDetails { get; set; }
    // public virtual ICollection<Review> Reviews { get; set; }
    // public virtual ICollection<OrderProduct> OrderProducts { get; set; }

    constructor() {
        this.id = 0;
        this.fullName = '';
        this.userName = '';
        this.passWord = '';
        this.dob = null;
        this.idCard = '';
        this.customerTypeId = 0;
        this.scorePay = 0;
        this.address = '';
        this.phone = '';
        this.avatar = '';
        this.customerType = null;
    }


}