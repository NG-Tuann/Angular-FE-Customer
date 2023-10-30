export class ProductPrice {
    id:number;
    createdDate:Date;
    basePrice:number;
    salePrice:number;
    inActive:boolean;

    constructor() {
        this.id = 0;
        this.createdDate = null;
        this.basePrice = 0;
        this.salePrice = 0;
        this.inActive = false;
    }
}