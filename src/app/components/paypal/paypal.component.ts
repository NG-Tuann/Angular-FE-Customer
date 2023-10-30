import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PayPalCheckOut } from 'src/app/models/paypal-checkout';
import { OrderProductService } from 'src/app/services/order-product.service';
import { ReloadheaderService } from 'src/app/services/reload_header.service';
import { CartSession } from 'src/app/view_models/cart_session_model';
import { NonCustomerPaypalSuccess } from 'src/app/view_models/non_customer_paypak_success';
import { ShippingInfo } from 'src/app/view_models/shipping_info_model';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
  paypal: PayPalCheckOut = new PayPalCheckOut();

  carts: CartSession[]=[];

  totalPay:number = 0;

  shippingInfo : ShippingInfo = new ShippingInfo();

  constructor(
    private orderProductService: OrderProductService,
    private route: ActivatedRoute,
    private router: Router,
    private reloadHeaderService: ReloadheaderService
  ){

  }
  ngOnInit(): void {
    this.onLoadBillPayPal();
    this.onInitView();
  }

  onInitView() {
    this.router.navigate(['/ptj/paypal-success']);
  }

  onLoadBillPayPal() {
    // Du lieu thong tin ve giao nhan
    const shipInfo = sessionStorage.getItem('shipInfo');
    this.shippingInfo = JSON.parse(shipInfo);
    // Du lieu thong tin ve gio hang
    const sessionCart = sessionStorage.getItem('cartItems');
    let carts = JSON.parse(sessionCart);

    // Tinh tong tien da thanh toan va loai di nhung san pham da thanh toan
    let totalCheckout =0;
    carts.forEach(element => {
      if(element.isCheck) {
        this.carts.push(element);
        totalCheckout += (element.salePrice - element.savePrice)*element.quantity;
      }
    });

    // Goi api luu cartSession va shipInfo 
    let result : NonCustomerPaypalSuccess = new NonCustomerPaypalSuccess();
    
    // Gan du lieu
    result.shipInfo = this.shippingInfo;
    result.cart = this.carts;

    this.orderProductService.checkoutSuccess(result).subscribe((result: string) => {
      console.log(result);
    });

    // Tong tien da thanh toan
    this.totalPay = totalCheckout;

    // Xoa di nhung san pham da checkout paypal
    carts.forEach(element => {
      if(element.isCheck) {
        carts = carts.filter(i => i !== element);
      }
    });

    // Thuc hien luu lai cart session 
    sessionStorage.setItem('cartItems', JSON.stringify(carts));

    // Cap nhat lai so luong con trong gio hang
    this.reloadHeader();
  }

  reloadHeader() {
    const eventData = { message: 'Hay reload header!' };
    this.reloadHeaderService.emitEvent(eventData);
  }
}
