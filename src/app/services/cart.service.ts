// cart.service.ts
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { ProductDetail } from '../models/product_detail';
import { CartSession } from '../view_models/cart_session_model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartSession[] = [];

  constructor() {
    // Lấy thông tin giỏ hàng từ sessionStorage khi service khởi tạo
    const storedCartItems = sessionStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
  }

  addToCart(product: ProductDetail, quantity: number, savePrice?:number) {
    // Kiểm tra nếu sản phẩm đã có trong giỏ hàng, thì cập nhật số lượng
    const existingItem = this.cartItems.find(item => item.productDetailId === product.id);
    if (existingItem) {
      existingItem.quantity = parseInt(existingItem.quantity.toString()) + parseInt(quantity.toString());
    } else {
      // Nếu sản phẩm chưa có trong giỏ hàng, thì thêm vào
      // Kiem tra day co phai la khach hang thanh vien
      const isLoggedIn = localStorage.getItem('token');
      if(isLoggedIn !=null) {
        // Neu la khach hang thanh vien dang mua hang thi se luu vao cartDB
        // Task nay lam sau khi minh hong quy trinh mua hang cho khach vang lai
      }

      // Khach vang lai mua hang thi chi luu session
      else {
        let cart = new CartSession();

        cart.quantity = quantity;
        cart.productDetailId = product.id;
        cart.isCheck = true;
        cart.savePrice = savePrice;
        console.log(product);
        cart.thumbnail = product.thumbnail;
        cart.salePrice = product.salePrice;
        cart.size = product.size;
        cart.name = product.name;

        this.cartItems.push(cart);
      }
    }
    // Lưu thông tin giỏ hàng vào sessionStorage sau khi thay đổi
    this.saveCartToSessionStorage(this.cartItems);
  }

  removeItem(id:number): any[] {
    console.log(id);
    this.cartItems.forEach(element => {
      if(element.productDetailId == id) {
        console.log("thay r nha")
        this.cartItems = this.cartItems.filter(i => i !== element);
      }
    });
    console.log(this.cartItems);
    this.saveCartToSessionStorage(this.cartItems);
    return this.cartItems;

  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.saveCartToSessionStorage(this.cartItems);
    // Xóa thông tin giỏ hàng khỏi sessionStorage
    sessionStorage.removeItem('cartItems');
  }

  public saveCartToSessionStorage(carts: CartSession[]) {
    sessionStorage.setItem('cartItems', JSON.stringify(carts));
  }

  
}