import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderProductService } from 'src/app/services/order-product.service';
import { CartSession } from 'src/app/view_models/cart_session_model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  checkOutList: CartSession[] = [];

  totalCheckout: string;

  constructor(
    private orderProductService: OrderProductService,
    private cartService: CartService,
  ){}

  ngOnInit(): void {
    this.onInitView();
  }

  onInitView() {
    let total= 0;
    this.cartService.getCartItems().forEach(item => {
      if(item.isCheck) {
        this.checkOutList.push(item);
        total +=(item.salePrice - item.savePrice) * item.quantity;
      }
    });
    this.totalCheckout = total.toString();
  }

  checkoutWithPaypal() {
    this.orderProductService.checkout(parseFloat(this.totalCheckout)).subscribe((result: string) => {
      console.log(result);
      window.location.href = result;
    });
  }

}
