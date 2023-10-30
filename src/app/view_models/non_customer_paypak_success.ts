import { CartSession } from "./cart_session_model";
import { ShippingInfo } from "./shipping_info_model";

export class NonCustomerPaypalSuccess {
    cart: CartSession[] = [];
    shipInfo: ShippingInfo;

    constructor() {
        this.shipInfo = new ShippingInfo()
    }
}