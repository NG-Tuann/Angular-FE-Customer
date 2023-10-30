import { Customer } from "./customer";

export class CustomerType {
    id:number;
    customerTypeName:string;
    discountValue:number;
    discountUnit:string;

    customers: Customer[];

    constructor() {
        this.id = 0;
        this.customerTypeName = '';
        this.discountValue =0;
        this.discountUnit = '';
        this.customers = null;
    }
}