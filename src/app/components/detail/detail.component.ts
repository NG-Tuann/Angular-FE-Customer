import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductDetail } from 'src/app/models/product_detail';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { HeaderComponent } from '../header/header.component';
import { ReloadheaderService } from 'src/app/services/reload_header.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, AfterViewInit{
  // Image thumbnail
  thumbNail : string='';

  // Id san pham 
  productId : number;
  // So luong mua 
  @ViewChild('quantity', { static: false }) buyQuantity: ElementRef;

  // Chi tiet san pham
  productDetail: Product;

  // Chi tiet san pham cung voi size va so luong duoc lua chon
  productDetailSelected: ProductDetail;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private reloadHeaderService: ReloadheaderService,
    private router : Router
    ) { }
  ngAfterViewInit(): void {
    this.buyQuantity.nativeElement.value = 1;
  }
    

  ngOnInit(): void {
    this.onViewInit();
  }

  onViewInit() {
    this.productId = this.route.snapshot.params['id']; 

    console.log(this.productId);

    this.productService.findProductDetail(this.productId).subscribe((result:Product) => {
      this.productDetail = result;
      console.log(this.productDetail);

      // Load thumbnail
      this.thumbNail = this.productDetail.image;

      // Load product detail mac dinh co gia thap nhat
      this.productDetailSelected = this.productDetail.productDetails[0];
    });
  }

  onSizeChoose(product: any, evt: any) {
    // Khi click chon size 

    const contextSizeElements = document.querySelectorAll('.size-box-value');

    contextSizeElements.forEach(element => {
        element.classList.remove('size-selected');
    });

    evt.srcElement.classList.add('size-selected');

    // Hien thi gia cung voi so luong ton kho con lai
    this.productDetailSelected = product;
  }

  onAddToCart() {
    // Kiem tra so luong khach muon mua co nho hon so luogn ton kho
    // if(this.productDetailSelected.quantity < this.buyQuantity.nativeElement.value) {
    //   alert('Out of stock');
    //   return;
    // }

    // // Kiem tra khach hang co mua lo ton kho
    // const sessionCart = sessionStorage.getItem('cartItems');
    // let carts = JSON.parse(sessionCart);

    // let isOutStock = false;

    // carts.forEach(element => {
    //   if(element.productDetailId == this.productDetailSelected.id) {
    //     let totalQuantity = element.quantity + this.buyQuantity.nativeElement.value;
    //     if(totalQuantity > this.productDetailSelected.quantity) {
    //       alert('Out of stock');
    //       isOutStock = true;
    //     }
    //   }
    // });

    // if(isOutStock) {
    //   return;
    // }

    let savePrice = 0;
    if(this.productDetail.productDiscounts.length > 0) {
      savePrice = this.productDetailSelected.productPrice.salePrice * (this.productDetail.productDiscounts[0].discountValue / 100 );
    }
    // Them cac thuoc tinh cho cart
    this.productDetailSelected.thumbnail = this.productDetail.image;
    this.productDetailSelected.salePrice = this.productDetailSelected.productPrice.salePrice;
    this.productDetailSelected.name = this.productDetail.name;


    this.cartService.addToCart(this.productDetailSelected,this.buyQuantity.nativeElement.value,savePrice);

    // Load lai header
    this.reloadHeader();
    // Sau khi add thanh cong thi navigate den trang gio hang
    this.router.navigate(['/ptj/cart']);
  }

  reloadHeader() {
    const eventData = { message: 'Hay reload header!' };
    this.reloadHeaderService.emitEvent(eventData);
  }

  onChangeDisplayImg(item) {
    this.productDetail.image = item.nameImages;
  }

  onLoadDefaultThumbnail(item) {
    this.productDetail.image = item;
  }
}
