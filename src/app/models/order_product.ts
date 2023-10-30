import { Cart } from "./cart";
import { Customer } from "./customer";
import { OrderDetail } from "./order_detail";
import { Promotion } from "./promotion";

export class OrderProduct{
    id:number;
    dateCreated?:Date;
    customerId: number;
    addressDelivery?: string;
    datePay?: Date;
    payType?: string;
    totalPay?: number;
    orderState?: string;
    phoneNonAccount?:string;
    nameCusNonAccount?: string;
    shipDate?: Date;
    shipFee?: number;
    idUser?: number;
    mailNonCus?: string;
    promotionId?: number;
    customerTypeId?: number;
    orderProductId?: string;
    customer?: Customer;
    promotion?: Promotion;
    carts: Cart[];
    orderDetails: OrderDetail[];

}