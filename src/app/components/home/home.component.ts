import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductBestSellerViewModel } from 'src/app/view_models/product_best_seller_view_model';
import { ProductViewModel } from 'src/app/view_models/product_view_model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) {

  }

  products: ProductViewModel[];

  productBestSellers: ProductBestSellerViewModel[];

  productHomeFlags: ProductViewModel[];

  ngOnInit(): void {
    this.onInitView();
  }

  onInitView() {
    this.onLoadProduct();
    this.onLoadProductBestSeller();
    this.onLoadHomeFlagProduct();
  }

  onLoadProduct() {
    this.productService.findAllProducts().subscribe((result: ProductViewModel[])=> {
      this.products = result;
      console.log(result);
    });
  }

  onLoadHomeFlagProduct() {
    this.productService.findAllHomeFlagProducts().subscribe((result: ProductViewModel[])=> {
      this.productHomeFlags = result;
      console.log(result);
    });
  }

  onLoadProductBestSeller() {
    this.productService.findAllBestSellerProducts().subscribe((result: ProductBestSellerViewModel[])=> {
      this.productBestSellers = result;
      console.log(result);
    });
  }
}
