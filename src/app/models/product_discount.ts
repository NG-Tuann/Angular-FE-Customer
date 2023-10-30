export class ProductDiscount {
    id:number;
    discountValue:number;
    discountUnit:string;
    dateCreated:Date;
    validUntil:Date;
    active:boolean;
    name:string;
    productId:number;
    stoneId:number;
    gemId:number;
    product:number;
    geomancy:number;
    stoneType:number;

    constructor() {
        this.id = 0;
        this.discountValue = 0;
        this.discountUnit='';
        this.dateCreated = null;
        this.validUntil = null;
        this.active = false;
        this.name='';
        this.productId =0;
        this.stoneId =0;
        this.gemId =0;
        this.product =null;
        this.geomancy =null;
        this.stoneType =null;
    }

}