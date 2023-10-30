import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ReloadheaderService } from 'src/app/services/reload_header.service';
import { CartSession } from 'src/app/view_models/cart_session_model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: CartSession[] = [];

  constructor(
    private cartService: CartService,
    private router: Router,
    private reloadHeaderService: ReloadheaderService,
    ){}

  ngOnInit(): void {
    this.initViewCart();
    console.log(this.carts);
  }

  initViewCart() {
    if(this.cartService.getCartItems() !=null && this.cartService.getCartItems().length >0) {
      this.carts = this.cartService.getCartItems();
    }
    else {

    }
  }

  // Khi nguoi dung click bo chon thanh toan o san pham
  onCheckboxChange(item: CartSession) {
    // Cap nhat lai o session cart
    const sessionCart = sessionStorage.getItem('cartItems');
    let carts = JSON.parse(sessionCart);

    carts.forEach(element => {
      if(element.productDetailId == item.productDetailId) {
        element.isCheck = !(element.isCheck);
        this.cartService.saveCartToSessionStorage(this.carts);
        // Load lai cho this.carts
        this.initViewCart();
      }
    });

    // Sau nay co the kiem tra cap nhat lai cartDB doi voi khach hang thanh vien
    // Task nay lam sau
  }

  onCheckOut(){ 

    // chuyen den trang checkout sau khi click
    this.router.navigate(['/ptj/checkout']);
  }

  onQuantityChange(item: CartSession) {
    const sessionCart = sessionStorage.getItem('cartItems');
    let carts = JSON.parse(sessionCart);

    carts.forEach(element => {
      if(element.productDetailId == item.productDetailId) {
        element.quantity = item.quantity;
        this.cartService.saveCartToSessionStorage(this.carts);
        // Load lai cho this.carts
        this.initViewCart();
      }
    });
    // Sau nay khi can cap nhat csdl doi voi khach hang thanh vien nen dung sử dụng debounce hoặc throttle để trì hoãn gọi API 
  }

  // Xoa san pham khoi gio hang
  removeThisItem(item: CartSession) {
    this.carts = this.cartService.removeItem(item.productDetailId);
    console.log(this.carts);
    // Load lai so luong gio hang
    this.reloadHeader();
  }

  reloadHeader() {
    const eventData = { message: 'Hay reload header!' };
    this.reloadHeaderService.emitEvent(eventData);
  }


}
