import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartSession } from 'src/app/view_models/cart_session_model';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  cartCheckoutItems: CartSession[] = [];

  totalCheckout: string;

  constructor(
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.onInitView();
  }

  onInitView() {
    let total= 0;
    this.cartService.getCartItems().forEach(item => {
      if(item.isCheck) {
        this.cartCheckoutItems.push(item);
        total +=(item.salePrice - item.savePrice) * item.quantity;
      }
    });
    this.totalCheckout = total.toString();
  }

}
